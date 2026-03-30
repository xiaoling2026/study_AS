# A-Level CIE Study Master

A-Level CIE 学习辅助应用，支持数学和物理学科的智能学习。

## 功能特性

- 📸 **智能题目识别** - 上传图片或 PDF，AI 自动识别题目和学生答案
- 🤖 **AI 判题分析** - 多模型支持（本地 Qwen / Kimi / Minimax），智能评分和详细点评
- 📚 **知识点学习** - 覆盖 A-Level 数学、物理核心知识点
- 📝 **练习题生成** - 根据知识点和难度自动生成练习题
- 📊 **学习统计** - 错题集、薄弱知识点分析、学习计划生成

## 快速开始

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 配置环境变量

```bash
cp .env.example .env
# 编辑 .env 文件，填入你的 API Keys
```

### 3. 启动服务

```bash
# 方式一：直接启动
python backend/main.py

# 方式二：使用 uvicorn
uvicorn backend.main:app --reload --port 8000
```

### 4. 访问应用

打开浏览器访问 http://localhost:8000

## 环境变量说明

| 变量名 | 说明 | 必填 |
|--------|------|------|
| AI_PROVIDER | AI 提供商 (auto/local/kimi/minimax) | 否，默认 auto |
| KIMI_API_KEY | Kimi API Key | 推荐 |
| MINIMAX_API_KEY | Minimax API Key | 可选 |
| MIMO_API_KEY | 小米 Mimo API Key | 可选 |

## 本地模型

支持本地运行 Qwen2.5-7B 模型（需自行下载）：

1. 下载模型文件到 `models/qwen/qwen2.5-7b-instruct-q4_0.gguf`
2. 安装 llama-cpp-python: `pip install llama-cpp-python`
3. 设置 `AI_PROVIDER=local` 或 `auto`

## 部署

### Vercel 部署

```bash
vercel --prod
```

### Render 部署

参考 `render.json` 配置

## 技术栈

- **后端**: FastAPI + Python
- **前端**: HTML + Tailwind CSS + Vanilla JS
- **AI**: Kimi / Minimax / 本地 Qwen 模型
- **数学渲染**: MathJax

## License

MIT