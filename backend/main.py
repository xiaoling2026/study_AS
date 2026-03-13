# A-Level Study App Backend
# 依赖：fastapi, uvicorn, python-multipart, PyPDF2, httpx

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import PyPDF2
import io
import json
import os
import httpx

app = FastAPI(title="A-Level Study API")

# CORS 设置
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============ 配置区 ============
# 当前使用的 AI: "kimi" 或 "minimax"
AI_PROVIDER = "kimi"  # 可改为 "minimax"

# Kimi API Key (主力)
KIMI_API_KEY = "sk-BzEYb4esUAq3qVdURq6swV7EYpEOwJsrvZm9QdvO1DnNCfDr"
KIMI_BASE_URL = "https://api.moonshot.cn"

# Minimax API Key (备选)
MINIMAX_API_KEY = "sk-cp-PiUMYB55KWSYbZNBBAFYKgmuQX7fwUIruTewGiUWZT4cvkHq4cGcq7Lclpkjeton5SG0wAtl7eEwbIujzwP8ZR8uhzbe92u0Vu1dGvzgsDUz26NlsyIkOPc"
MINIMAX_BASE_URL = "https://api.minimax.chat"

# Xiaomi mimo 模型 (内测)
MIMO_API_KEY = "sk-c0hlfl3h5tw4yhgz71igfyjgatc8zmv296kvpqd91vmw4kvf"
MIMO_BASE_URL = "https://api.xiaomimimo.com/v1"  # 外网地址
# =================================

# 存储上传的文件
uploaded_pdfs = {}

# 缓存识别的题目（key: 文件内容hash, value: 识别结果）
question_cache = {}

# 百度 OCR API (有免费额度)
BAIDU_API_KEY = "your-api-key"
BAIDU_SECRET_KEY = "your-secret-key"
BAIDU_ACCESS_TOKEN = None

@app.get("/")
def read_root():
    return {"message": "A-Level Study API is running", "version": "1.0"}

@app.post("/upload-pdf")
async def upload_file(file: UploadFile = File(...)):
    """上传文件 (PDF 或图片) 并解析内容"""
    filename = file.filename.lower()
    
    content = await file.read()
    
    # 计算文件内容 hash 用于缓存
    import hashlib
    file_hash = hashlib.md5(content).hexdigest()
    
    # 检查缓存
    if file_hash in question_cache:
        cached_result = question_cache[file_hash]
        file_id = f"file_cached_{len(uploaded_pdfs) + 1}"
        uploaded_pdfs[file_id] = {
            "filename": file.filename,
            "text": "[缓存]",
            "content": content,
            "type": "image",
            "cached_questions": cached_result
        }
        return {
            "success": True,
            "file_id": file_id,
            "filename": file.filename,
            "page_count": 1,
            "text_preview": "[已缓存 - 快速识别]",
            "cached": True
        }
    
    file_id = f"file_{len(uploaded_pdfs) + 1}"
    
    # 根据文件类型处理
    if filename.endswith('.pdf'):
        try:
            pdf_reader = PyPDF2.PdfReader(io.BytesIO(content))
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
            
            uploaded_pdfs[file_id] = {
                "filename": file.filename,
                "text": text,
                "content": content,
                "type": "pdf"
            }
            
            return {
                "success": True,
                "file_id": file_id,
                "filename": file.filename,
                "page_count": len(pdf_reader.pages),
                "text_preview": text[:500] + "..." if len(text) > 500 else text
            }
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"PDF 解析失败: {str(e)}")
    
    elif filename.endswith(('.jpg', '.jpeg', '.png')):
        # 保存图片，文字识别需要OCR（暂存图片路径）
        import base64
        img_base64 = base64.b64encode(content).decode('utf-8')
        
        uploaded_pdfs[file_id] = {
            "filename": file.filename,
            "text": "[图片文件 - 请手动输入题目内容]",
            "content": content,
            "image_base64": img_base64,
            "type": "image"
        }
        
        return {
            "success": True,
            "file_id": file_id,
            "filename": file.filename,
            "page_count": 1,
            "text_preview": "[图片文件 - AI将分析图片中的题目]"
        }
    
    else:
        raise HTTPException(status_code=400, detail="不支持的文件格式，请上传 PDF、JPG 或 PNG")

@app.get("/pdf/{file_id}")
def get_pdf_content(file_id: str):
    """获取已上传 PDF 的内容"""
    if file_id not in uploaded_pdfs:
        raise HTTPException(status_code=404, detail="文件不存在")
    
    return {
        "success": True,
        "file_id": file_id,
        "filename": uploaded_pdfs[file_id]["filename"],
        "text": uploaded_pdfs[file_id]["text"]
    }

@app.post("/extract")
async def extract_from_images(request: dict):
    """直接用 Kimi AI 分析图片/文件，提取题目和答案"""
    file_ids = request.get("file_ids", [])
    
    # 准备要分析的内容
    files_to_analyze = []
    
    for file_id in file_ids:
        if file_id not in uploaded_pdfs:
            continue
        file_info = uploaded_pdfs[file_id]
        
        if file_info.get("type") == "image":
            # 图片：转 base64 给 Kimi
            import base64
            img_base64 = base64.b64encode(file_info["content"]).decode('utf-8')
            files_to_analyze.append({
                "type": "image",
                "name": file_info["filename"],
                "base64": img_base64
            })
        elif file_info.get("type") == "pdf":
            # PDF：提取文字
            files_to_analyze.append({
                "type": "text",
                "content": file_info.get("text", "")
            })
    
    if not files_to_analyze:
        return {"success": False, "error": "没有可分析的内容"}
    
    # 直接用 Kimi 分析
    prompt = """请分析这张图片/PDF中的内容，识别出所有的A-Level数学或物理题目和对应的学生答案。

请以JSON数组格式返回：
[
    {"question": "题目1内容", "answer": "答案1内容"},
    {"question": "题目2内容", "answer": "答案2内容"}
]

只返回JSON数组，不要其他内容。"""

    try:
        # 构建消息 - 支持图片
        messages = [
            {"role": "system", "content": "你是一个专业的A-Level数学和物理老师，擅长识别题目。"},
            {"role": "user", "content": [
                {"type": "text", "text": prompt}
            ]}
        ]
        
        # 添加图片到消息
        for f in files_to_analyze:
            if f["type"] == "image":
                messages[1]["content"].append({
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/jpeg;base64,{f['base64']}"
                    }
                })
            else:
                messages[1]["content"].append({
                    "type": "text", 
                    "text": f"PDF内容: {f['content'][:2000]}"
                })
        
        async with httpx.AsyncClient(timeout=120.0) as client:
            response = await client.post(
                f"{KIMI_BASE_URL}/v1/chat/completions",
                headers={"Authorization": f"Bearer {KIMI_API_KEY}", "Content-Type": "application/json"},
                json={
                    "model": "kimi-k2.5",
                    "messages": messages,
                    "reasoning": {"effort": "medium"}
                }
            )
            
            if response.status_code == 200:
                result = response.json()
                content = result.get("choices", [{}])[0].get("message", {}).get("content", "[]")
                
                import re
                json_match = re.search(r'\[.*\]', content, re.DOTALL)
                if json_match:
                    questions = json.loads(json_match.group())
                    return {"success": True, "questions": questions}
                    
    except Exception as e:
        return {"success": False, "error": str(e)}
    
    return {"success": False, "error": "分析失败"}
    
    if not combined.strip():
        return {"success": False, "error": "未找到内容"}
    
    # 使用 AI 提取多个题目
    prompt = f"""从以下内容中识别出所有题目和对应的学生答案。
可能包含多个题目，请逐一识别。

内容：
{combined}

请以JSON数组格式返回，每个元素包含question(题目)和answer(学生答案)：
[
    {{"question": "题目1内容", "answer": "答案1内容"}},
    {{"question": "题目2内容", "answer": "答案2内容"}}
]

只返回JSON数组。"""

    try:
        async with httpx.AsyncClient(timeout=90.0) as client:
            response = await client.post(
                f"{KIMI_BASE_URL}/v1/chat/completions",
                headers={"Authorization": f"Bearer {KIMI_API_KEY}", "Content-Type": "application/json"},
                json={"model": "kimi-k2.5", "messages": [{"role": "system", "content": "你是一个题目识别助手。"}, {"role": "user", "content": prompt}]}
            )
            
            if response.status_code == 200:
                result = response.json()
                content = result.get("choices", [{}])[0].get("message", {}).get("content", "[]")
                
                import re
                json_match = re.search(r'\[.*\]', content, re.DOTALL)
                if json_match:
                    questions = json.loads(json_match.group())
                    return {"success": True, "questions": questions}
    except Exception as e:
        pass
    
    # 失败则返回原始文本作为单个题目
    return {"success": True, "questions": [{"question": combined, "answer": ""}]}

@app.post("/analyze")
async def analyze_answers(request: dict):
    """
    分析学生答案
    请求体: {
        "file_id": "pdf_1",
        "question": "题目内容",
        "student_answer": "学生答案",
        "standard_answer": "标准答案(可选)"
    }
    """
    file_id = request.get("file_id")
    question = request.get("question", "")
    student_answer = request.get("student_answer", "")
    standard_answer = request.get("standard_answer", "")
    
    if file_id and file_id in uploaded_pdfs:
        pdf_text = uploaded_pdfs[file_id]["text"]
    else:
        pdf_text = ""
    
    # 调用 AI 进行分析（智能选择模型）
    analysis = await analyze_with_best_model(
        question, student_answer, standard_answer, pdf_text
    )
    
    return {
        "success": True,
        "file_id": file_id,
        "analysis": analysis
    }

async def analyze_with_best_model(question: str, student_answer: str, standard_answer: str, pdf_text: str = "") -> dict:
    """智能模型选择：优先用 Kimi，失败则切换 mimo，再失败则用 Minimax"""
    
    # 模型列表（按优先级）
    models = [
        {"name": "Kimi", "base_url": KIMI_BASE_URL, "api_key": KIMI_API_KEY, "model_id": "kimi-k2.5"},
        {"name": "mimo", "base_url": MIMO_BASE_URL.replace("http://", "https://") if MIMO_BASE_URL.startswith("http://") else MIMO_BASE_URL, "api_key": MIMO_API_KEY, "model_id": "mimo-claw-0301"},
        {"name": "Minimax", "base_url": MINIMAX_BASE_URL, "api_key": MINIMAX_API_KEY, "model_id": "MiniMax-M2.5"},
    ]
    
    last_error = ""
    
    for model in models:
        if not model["api_key"] or model["api_key"] in ["your-api-key-here", ""]:
            continue
            
        try:
            prompt = f"""你是一个专业的 A-Level 数学/物理老师。请详细分析学生的答案并给出全面反馈。

题目: {question}
学生答案: {student_answer}

请从以下维度进行详细分析：
1. 评分 (0-100分)
2. 总体评价 - 优点和不足
3. 具体错误分析 - 每个错误的类型和详细说明
4. 薄弱知识点 - 学生需要加强的概念
5. 学习建议 - 针对性的改进建议
6. 标准解法 - 完整、规范的解题步骤

请以 JSON 格式返回：
{{
    "score": 分数,
    "comment": "详细评价",
    "errors": [{{"type": "错误类型", "description": "详细描述"}}],
    "weak_points": ["知识点1", "知识点2"],
    "suggestions": [{{"topic": "建议内容", "reason": "原因"}}],
    "better_solution": "完整的标准解法"
}}

数学公式用简单格式如 cos²θ/sin²θ。只返回 JSON。"""

            async with httpx.AsyncClient(timeout=90.0) as client:
                # Kimi/mimo 使用 openai 格式
                if model["name"] in ["Kimi", "mimo"]:
                    response = await client.post(
                        f"{model['base_url']}/v1/chat/completions",
                        headers={
                            "Authorization": f"Bearer {model['api_key']}",
                            "Content-Type": "application/json"
                        },
                        json={
                            "model": model["model_id"],
                            "messages": [
                                {"role": "system", "content": "你是一个专业的A-Level数学和物理老师。"},
                                {"role": "user", "content": prompt}
                            ]
                        }
                    )
                else:
                    # Minimax 使用 anthropic 格式
                    response = await client.post(
                        f"{model['base_url']}/v1/chat/completions",
                        headers={
                            "Authorization": f"Bearer {model['api_key']}",
                            "Content-Type": "application/json"
                        },
                        json={
                            "model": model["model_id"],
                            "messages": [
                                {"role": "user", "content": prompt}
                            ]
                        }
                    )
                
                if response.status_code == 200:
                    result = response.json()
                    content = result.get("choices", [{}])[0].get("message", {}).get("content", "{}")
                    
                    # 尝试解析 JSON
                    import re
                    json_match = re.search(r'\{.*\}', content, re.DOTALL)
                    if json_match:
                        try:
                            analysis = json.loads(json_match.group())
                            analysis["_model_used"] = model["name"]  # 记录使用的模型
                            return analysis
                        except:
                            pass
                    
                    return {
                        "score": 75,
                        "comment": content[:300],
                        "errors": [],
                        "weak_points": [],
                        "suggestions": [],
                        "_model_used": model["name"]
                    }
                else:
                    last_error = f"{model['name']} error: {response.status_code}"
                    continue
                    
        except Exception as e:
            last_error = f"{model['name']} exception: {str(e)}"
            continue
    
    # 所有模型都失败
    return {
        "score": 0,
        "comment": f"所有模型都失败了。最后错误: {last_error}",
        "errors": [],
        "weak_points": [],
        "suggestions": []
    }

# 保留原来的函数作为备用
async def analyze_with_kimi(question: str, student_answer: str, standard_answer: str, pdf_text: str = "") -> dict:
    """使用 Kimi 大模型分析答案"""
    
    if not MINIMAX_API_KEY or MINIMAX_API_KEY == "your-api-key-here":
        # 如果没有配置 API Key，返回本地分析
        return simple_local_analysis(question, student_answer, standard_answer)
    
    # 构建提示词
    prompt = f"""你是一个专业的 A-Level 数学/物理老师。请详细分析学生的答案并给出全面反馈。

题目: {question}
学生答案: {student_answer}

请从以下维度进行详细分析：
1. 评分 (0-100分)
2. 总体评价 - 优点和不足
3. 具体错误分析 - 每个错误的类型和详细说明
4. 薄弱知识点 - 学生需要加强的概念
5. 学习建议 - 针对性的改进建议
6. 标准解法 - 完整、规范的解题步骤

请以 JSON 格式返回：
{{
    "score": 分数,
    "comment": "详细评价",
    "errors": [{"type": "错误类型", "description": "详细描述"}],
    "weak_points": ["知识点1", "知识点2"],
    "suggestions": [{"topic": "建议内容", "reason": "原因"}],
    "better_solution": "完整的标准解法"
}}

数学公式用简单格式如 cos²θ/sin²θ。只返回 JSON。"""

    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(
                f"{KIMI_BASE_URL}/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {KIMI_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": "kimi-k2.5",
                    "messages": [
                        {"role": "system", "content": "你是一个专业的A-Level数学和物理老师。"},
                        {"role": "user", "content": prompt}
                    ]
                }
            )
            
            if response.status_code == 200:
                result = response.json()
                content = result.get("choices", [{}])[0].get("message", {}).get("content", "{}")
                
                # 尝试解析 JSON
                try:
                    import re
                    # 提取 JSON 部分
                    json_match = re.search(r'\{.*\}', content, re.DOTALL)
                    if json_match:
                        return json.loads(json_match.group())
                except:
                    pass
                
                return {
                    "score": 75,
                    "comment": content[:200],
                    "errors": [],
                    "weak_points": [],
                    "suggestions": [],
                    "raw_response": content
                }
            else:
                return {
                    "error": f"API 调用失败: {response.status_code}",
                    "detail": simple_local_analysis(question, student_answer, standard_answer)
                }
                
    except Exception as e:
        return {
            "error": f"调用失败: {str(e)}",
            "fallback": simple_local_analysis(question, student_answer, standard_answer)
        }

def simple_local_analysis(question: str, student_answer: str, standard_answer: str) -> dict:
    """本地简单分析（无 API 时使用）"""
    
    if not student_answer.strip():
        return {
            "score": 0,
            "comment": "未找到答案，请输入你的解答",
            "errors": [],
            "weak_points": [],
            "suggestions": []
        }
    
    # 简单对比
    is_correct = student_answer.strip().lower() == standard_answer.strip().lower() if standard_answer else None
    
    if is_correct:
        return {
            "score": 100,
            "comment": "答案完全正确！🎉",
            "errors": [],
            "weak_points": [],
            "suggestions": []
        }
    elif is_correct is False:
        return {
            "score": 60,
            "comment": "答案有误，请检查计算过程",
            "errors": [{"type": "答案错误", "description": "与标准答案不符"}],
            "weak_points": ["计算能力", "概念理解"],
            "suggestions": [
                {"topic": "基础计算", "reason": "建议加强代数运算练习"},
                {"topic": "概念理解", "reason": "建议复习相关定义"}
            ]
        }
    else:
        return {
            "score": 75,
            "comment": "答案已收到，请查看详细分析",
            "errors": [],
            "weak_points": [],
            "suggestions": []
        }

@app.get("/topics")
def get_topics():
    """获取知识点列表"""
    return {
        "math": [
            {"id": 1, "name": "Quadratics 二次方程", "code": "9709"},
            {"id": 2, "name": "Functions 函数", "code": "9709"},
            {"id": 3, "name": "Coordinate Geometry 坐标几何", "code": "9709"},
            {"id": 4, "name": "Trigonometry 三角函数", "code": "9709"},
            {"id": 5, "name": "Sequences 数列", "code": "9709"},
            {"id": 6, "name": "Differentiation 微分", "code": "9709"},
            {"id": 7, "name": "Integration 积分", "code": "9709"},
            {"id": 8, "name": "Circular Motion 圆周运动", "code": "9709"}
        ],
        "physics": [
            {"id": 1, "name": "Physical Quantities 物理量", "code": "9702"},
            {"id": 2, "name": "Kinematics 运动学", "code": "9702"},
            {"id": 3, "name": "Dynamics 动力学", "code": "9702"},
            {"id": 4, "name": "Forces 力", "code": "9702"},
            {"id": 5, "name": "Energy 能量", "code": "9702"},
            {"id": 6, "name": "Waves 波", "code": "9702"},
            {"id": 7, "name": "Optics 光学", "code": "9702"},
            {"id": 8, "name": "Electric Currents 电流", "code": "9702"}
        ]
    }

@app.post("/analyze-image")
async def analyze_image(request: dict):
    """
    分析图片中的数学题
    请求体: {"file_id": "file_1"}
    返回: AI 分析的完整结果（题目识别 + 判题分析）
    """
    file_id = request.get("file_id")
    if not file_id or file_id not in uploaded_pdfs:
        return {"success": False, "error": "文件不存在"}
    
    file_data = uploaded_pdfs[file_id]
    if file_data.get("type") != "image":
        return {"success": False, "error": "只支持图片文件"}
    
    img_base64 = file_data.get("image_base64", "")
    if not img_base64:
        return {"success": False, "error": "图片数据不存在"}
    
    # 使用 Kimi 分析图片
    try:
        async with httpx.AsyncClient(timeout=120.0) as client:
            response = await client.post(
                f"{KIMI_BASE_URL}/v1/chat/completions",
                headers={"Authorization": f"Bearer {KIMI_API_KEY}", "Content-Type": "application/json"},
                json={
                    "model": "kimi-k2.5",
                    "messages": [
                        {
                            "role": "system", 
                            "content": "你是一位专业的 A-Level 数学老师。请仔细分析图片中的数学题目和学生的解答，给出详细的点评。"
                        },
                        {
                            "role": "user", 
                            "content": [
                                {"type": "text", "text": "请分析这张图片中的数学题。请识别：\n1. 完整的题目内容\n2. 学生的解答步骤\n3. 给出评分（满分100）\n4. 详细点评（优点、错误、改进建议）\n\n请以JSON格式返回：\n{\n  \"question\": \"题目内容\",\n  \"student_answer\": \"学生答案\",\n  \"score\": 分数,\n  \"comment\": \"总体评价\",\n  \"errors\": [{\"type\": \"错误类型\", \"description\": \"说明\"}],\n  \"weak_points\": [\"薄弱知识点\"],\n  \"suggestions\": [{\"topic\": \"建议主题\", \"reason\": \"原因\"}]\n}"},
                                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{img_base64}"}}
                            ]
                        }
                    ]
                }
            )
            
            if response.status_code == 200:
                result = response.json()
                content = result.get("choices", [{}])[0].get("message", {}).get("content", "")
                
                # 尝试提取 JSON
                import re
                json_match = re.search(r'\{.*\}', content, re.DOTALL)
                if json_match:
                    try:
                        analysis = json.loads(json_match.group())
                        return {
                            "success": True,
                            "file_id": file_id,
                            "analysis": analysis
                        }
                    except:
                        pass
                
                # 如果 JSON 解析失败，返回原始内容
                return {
                    "success": True,
                    "file_id": file_id,
                    "analysis": {
                        "question": "[请手动输入题目]",
                        "student_answer": "[请手动输入答案]",
                        "score": 0,
                        "comment": content[:500],
                        "errors": [],
                        "weak_points": [],
                        "suggestions": []
                    }
                }
            else:
                return {"success": False, "error": f"AI 分析失败: {response.status_code}"}
    except Exception as e:
        return {"success": False, "error": f"分析异常: {str(e)}"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


@app.post("/switch-ai")
def switch_ai(request: dict):
    """切换 AI 提供商"""
    global AI_PROVIDER
    provider = request.get("provider", "kimi")
    if provider in ["kimi", "minimax"]:
        AI_PROVIDER = provider
        return {"success": True, "provider": AI_PROVIDER}
    return {"success": False, "error": "Invalid provider"}


@app.post("/extract-questions")
async def extract_questions(request: dict):
    """
    从图片中提取多个题目
    请求体: {"file_id": "file_1"}
    返回: 题目列表 [{"id": 1, "question": "...", "student_answer": "..."}]
    """
    file_id = request.get("file_id")
    if not file_id or file_id not in uploaded_pdfs:
        return {"success": False, "error": "文件不存在"}
    
    file_data = uploaded_pdfs[file_id]
    
    # 检查缓存
    if "cached_questions" in file_data:
        return {"success": True, "file_id": file_id, "questions": file_data["cached_questions"], "cached": True}
    
    img_base64 = file_data.get("image_base64", "")
    pdf_text = file_data.get("text", "")
    
    # 如果是 PDF，直接分析文本
    if file_data.get("type") == "pdf":
        prompt = f"""从以下内容中提取所有数学题目和对应的学生答案。
如果有多道题，请逐一识别并编号。

内容：
{pdf_text[:3000]}

请以JSON数组格式返回，每个元素包含：
- id: 题号（1, 2, 3...）
- question: 题目内容
- student_answer: 学生答案（如果有）

格式：
[
  {{"id": 1, "question": "题目1", "student_answer": "答案1"}},
  {{"id": 2, "question": "题目2", "student_answer": "答案2"}}
]

只返回JSON数组，不要其他内容。"""
        
        try:
            async with httpx.AsyncClient(timeout=90.0) as client:
                response = await client.post(
                    f"{KIMI_BASE_URL}/v1/chat/completions",
                    headers={"Authorization": f"Bearer {KIMI_API_KEY}", "Content-Type": "application/json"},
                    json={"model": "kimi-k2.5", "messages": [{"role": "system", "content": "你是一个题目识别助手。"}, {"role": "user", "content": prompt}]}
                )
                
                if response.status_code == 200:
                    result = response.json()
                    content = result.get("choices", [{}])[0].get("message", {}).get("content", "[]")
                    
                    import re
                    json_match = re.search(r'\[.*\]', content, re.DOTALL)
                    if json_match:
                        questions = json.loads(json_match.group())
                        return {"success": True, "file_id": file_id, "questions": questions}
        except Exception as e:
            pass
        
        # 失败则返回整个文本作为一个题目
        return {"success": True, "file_id": file_id, "questions": [{"id": 1, "question": pdf_text[:500], "student_answer": ""}]}
    
    # 如果是图片，使用智能模型选择（带fallback）
    elif file_data.get("type") == "image" and img_base64:
        # 模型列表（按优先级）
        models = [
            {"name": "Kimi", "base_url": KIMI_BASE_URL, "api_key": KIMI_API_KEY, "model_id": "kimi-k2.5"},
            {"name": "mimo", "base_url": MIMO_BASE_URL, "api_key": MIMO_API_KEY, "model_id": "mimo-claw-0301"},
            {"name": "Minimax", "base_url": MINIMAX_BASE_URL, "api_key": MINIMAX_API_KEY, "model_id": "MiniMax-M2.5"},
        ]
        
        for model in models:
            if not model["api_key"] or model["api_key"] in ["your-api-key-here", ""]:
                continue
            
            try:
                async with httpx.AsyncClient(timeout=120.0) as client:
                    response = await client.post(
                        f"{model['base_url']}/v1/chat/completions",
                        headers={"Authorization": f"Bearer {model['api_key']}", "Content-Type": "application/json"},
                        json={
                            "model": model["model_id"],
                            "messages": [
                                {
                                    "role": "system", 
                                    "content": "你是一位专业的 A-Level 数学老师。请仔细分析图片中的所有数学题目。"
                                },
                                {
                                    "role": "user", 
                                    "content": [
                                        {"type": "text", "text": "请识别图片中的所有数学题目。如果有多道题，请逐一编号列出。\n\n请以JSON数组格式返回，每个元素包含：\n- id: 题号（1, 2, 3...）\n- question: 题目内容\n- student_answer: 学生答案（如果有）\n\n格式：[{\"id\": 1, \"question\": \"...\", \"student_answer\": \"...\"}]\n\n只返回JSON数组。"},
                                        {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{img_base64}"}}
                                    ]
                                }
                            ]
                        }
                    )
                    
                    if response.status_code == 200:
                        result = response.json()
                        content = result.get("choices", [{}])[0].get("message", {}).get("content", "")
                        
                        import re
                        json_match = re.search(r'\[.*\]', content, re.DOTALL)
                        if json_match:
                            try:
                                questions = json.loads(json_match.group())
                                # 保存到缓存
                                import hashlib
                                content = file_data.get("content", b"")
                                file_hash = hashlib.md5(content).hexdigest()
                                question_cache[file_hash] = questions
                                return {"success": True, "file_id": file_id, "questions": questions, "_model": model["name"]}
                            except:
                                pass
            except Exception as e:
                continue
        
        return {"success": False, "error": "所有模型都失败了，请检查API配置"}


@app.post("/analyze-question")
async def analyze_single_question(request: dict):
    """
    分析单个题目
    请求体: {"file_id": "file_1", "question_id": 1, "question": "...", "student_answer": "..."}
    """
    file_id = request.get("file_id")
    question = request.get("question", "")
    student_answer = request.get("student_answer", "")
    
    if not question:
        return {"success": False, "error": "题目内容不能为空"}
    
    # 调用 AI 分析（使用智能模型选择）
    analysis = await analyze_with_best_model(question, student_answer, "", "")
    
    return {
        "success": True,
        "file_id": file_id,
        "analysis": analysis
    }

