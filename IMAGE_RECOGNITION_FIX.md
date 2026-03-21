# A-Level 图片识别问题修复

## 问题描述

上传图片后，点击"识别题目"报错：没有识别到题目

## 诊断结果

1. ✓ 后端服务运行正常
2. ✓ `/extract-questions` 路由已注册
3. ✗ 但调用时返回 404 Not Found

## 可能原因

1. 服务未正确重启，旧代码仍在运行
2. 路由注册顺序问题
3. 请求路径错误

## 修复步骤

### 步骤 1: 完全停止服务
```bash
pkill -9 -f "python.*main.py"
sleep 3
```

### 步骤 2: 检查端口
```bash
lsof -Pi :8000
```
确保没有进程占用 8000 端口

### 步骤 3: 重新启动服务
```bash
cd ~/.openclaw/workspace/projects/study_AS
python3 backend/main.py
```

### 步骤 4: 测试 API
```bash
curl -X POST http://localhost:8000/extract-questions \
  -H "Content-Type: application/json" \
  -d '{"file_id": "test"}'
```

应该返回:
```json
{"success": false, "error": "文件不存在"}
```

而不是 404

## 临时解决方案

如果问题无法立即解决，可以使用替代方案：

1. **使用 `/extract` API** - 原来的图片分析接口
2. **手动输入题目** - 绕过自动识别

## 需要检查的文件

- `backend/main.py` - 确保 `/extract-questions` 路由正确定义
- `index.html` - 确保前端调用正确的 API 端点

## 当前状态

- 服务已重启
- 路由已注册
- 但 404 问题仍需进一步调查

建议：完全重启服务后再次测试
