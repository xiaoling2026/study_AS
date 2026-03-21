# study_AS 本地开发环境配置

## ✅ 已完成配置

### 项目位置
```
~/.openclaw/workspace/projects/study_AS/
```

### 技术栈
- **前端**: HTML5 + Tailwind CSS + Vanilla JS
- **后端**: FastAPI (Python)
- **AI 服务**: Kimi API (Moonshot) / Minimax API

---

## 🚀 快速启动

### 方式一：使用启动脚本（推荐）
```bash
cd ~/.openclaw/workspace/projects/study_AS
./start.sh
```

### 方式二：手动启动

**1. 启动后端**
```bash
cd ~/.openclaw/workspace/projects/study_AS/backend
python3 main.py
```
后端将在 http://localhost:8000 运行

**2. 访问前端**
- 通过后端服务: http://localhost:8000
- 或直接打开: `~/.openclaw/workspace/projects/study_AS/index.html`

---

## 📁 项目结构

```
study_AS/
├── index.html          # 主页面（前端入口）
├── css/                # 样式文件
├── js/                 # JavaScript 文件
│   └── data/
│       └── questions.js    # CIE 真题题库（60道）
├── backend/
│   ├── main.py         # FastAPI 后端主文件
│   ├── requirements.txt
│   └── README.md
├── docs/               # 文档
├── backups/            # 备份文件
├── tests/              # 测试文件
├── start.sh            # 一键启动脚本 ⭐
└── requirements.txt    # Python 依赖
```

---

## 🔧 后端 API 端点

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/` | 根路径（返回前端页面） |
| POST | `/upload-pdf` | 上传 PDF 文件 |
| GET | `/pdf/{file_id}` | 获取 PDF 内容 |
| POST | `/analyze` | AI 分析学生答案 |
| GET | `/topics` | 获取知识点列表 |

---

## 🤖 AI 配置

后端已配置两个 AI 提供商：
- **主力**: Kimi (Moonshot)
- **备选**: Minimax

如需修改 API Key，编辑 `backend/main.py` 中的配置区。

---

## 📚 功能模块

1. **每日课程** - 按知识点学习（数学、物理、化学）
2. **智能练习** - 60道 CIE 真题练习
3. **PDF 解析** - 上传 PDF 文件并 AI 分析
4. **答案分析** - AI 智能批改和讲解

---

## 🛠️ 开发命令

```bash
# 进入项目目录
cd ~/.openclaw/workspace/projects/study_AS

# 启动后端开发服务器
cd backend && python3 main.py

# 前端直接打开（无需构建）
# 浏览器打开 index.html 即可
```

---

## ⚠️ 注意事项

1. 后端依赖已安装到用户目录（使用 `--break-system-packages`）
2. 如需使用虚拟环境，可运行：
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r backend/requirements.txt
   ```
3. 前端是纯静态页面，无需构建步骤

---

## 📝 迭代开发建议

1. **修改前端**: 直接编辑 `index.html`, `css/`, `js/` 文件
2. **修改后端**: 编辑 `backend/main.py`，保存后自动重载
3. **添加题目**: 编辑 `js/data/questions.js`
4. **测试 API**: 使用 `curl` 或 Postman 测试后端接口

---

配置完成时间: 2025-03-20
