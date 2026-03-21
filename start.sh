#!/bin/bash
# study_AS 混合模型方案启动脚本
# 支持本地模型 + API fallback

cd "$(dirname "$0")"

echo "=========================================="
echo "  study_AS - A-Level 学习助手"
echo "  混合模型方案 (本地 + API)"
echo "=========================================="
echo ""

# 检查本地模型
MODEL_PATH="models/qwen/qwen2.5-7b-instruct-q4_k_m.gguf"
if [ -f "$MODEL_PATH" ]; then
    MODEL_SIZE=$(ls -lh "$MODEL_PATH" | awk '{print $5}')
    echo "✅ 本地模型已就绪: $MODEL_SIZE"
else
    echo "⏳ 本地模型未下载完成"
    echo "   路径: $MODEL_PATH"
    echo "   系统将使用 API 模式 (Kimi/Minimax)"
    echo ""
    echo "💡 如需下载本地模型，运行:"
    echo "   python3 download_model.py"
fi
echo ""

# 启动后端
echo "🚀 启动后端服务..."
cd backend
python3 main.py &
BACKEND_PID=$!
echo "后端 PID: $BACKEND_PID"
echo ""

# 等待后端启动
sleep 3

# 检查服务状态
echo "📊 服务状态检查..."
curl -s http://localhost:8000/status | python3 -m json.tool 2>/dev/null || echo "   服务启动中，请稍后检查..."
echo ""

echo "✅ 后端服务: http://localhost:8000"
echo "📁 前端访问: http://localhost:8000 或直接用浏览器打开 index.html"
echo ""
echo "📝 AI 配置:"
echo "   模式: auto (本地优先，API fallback)"
echo "   可用模型: Local-Qwen2.5-7B, Kimi, Minimax, mimo"
echo ""
echo "🛑 停止服务: kill $BACKEND_PID"
echo ""

# 保持脚本运行
wait $BACKEND_PID
