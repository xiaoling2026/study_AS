# 启动后端的说明

## 1. 安装依赖
```bash
cd backend
pip install -r requirements.txt
```

## 2. 启动服务
```bash
python main.py
```
服务将在 http://localhost:8000 运行

## 3. API 端点

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | / | 根路径 |
| POST | /upload-pdf | 上传 PDF 文件 |
| GET | /pdf/{file_id} | 获取 PDF 内容 |
| POST | /analyze | 分析学生答案 |
| GET | /topics | 获取知识点列表 |

## 4. 调用示例

```bash
# 上传 PDF
curl -X POST -F "file=@test.pdf" http://localhost:8000/upload-pdf

# 分析答案
curl -X POST -H "Content-Type: application/json" \
  -d '{"file_id":"pdf_1","question":"求导 y=x^2","student_answer":"dy/dx=2x","standard_answer":"dy/dx=2x"}' \
  http://localhost:8000/analyze
```

## 5. 接入大模型

修改 `main.py` 中的 `simple_analysis` 函数，接入 OpenAI 或其他 LLM API：

```python
import openai

openai.api_key = "你的API Key"

def analyze_with_ai(question, student_answer, standard_answer):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "你是一个A-Level数学老师..."},
            {"role": "user", "content": f"题目: {question}\n学生答案: {student_answer}\n标准答案: {standard_answer}"}
        ]
    )
    return response.choices[0].message.content
```
