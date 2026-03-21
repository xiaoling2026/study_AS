# study_AS 混合模型方案

## 🎯 方案概述

采用 **本地模型优先 + API fallback** 的混合架构：
- **本地模型**: Qwen2.5-7B-Instruct (4-bit 量化，约 4.5GB)
- **API 备选**: Kimi (主力) → mimo → Minimax
- **智能切换**: 本地模型失败时自动切换到 API

---

## 📊 模型能力对比

| 模型 | 位置 | 速度 | A-Level 能力 | 成本 |
|------|------|------|-------------|------|
| Qwen2.5-7B | 本地 | 10-20 t/s | ⭐⭐⭐ 基础-中等 | 免费 |
| Kimi-k2.5 | API | 快 | ⭐⭐⭐⭐⭐ 全难度 | 按量计费 |
| Minimax | API | 快 | ⭐⭐⭐⭐ 中等-难 | 按量计费 |

---

## 🚀 快速开始

### 1. 启动服务（自动检测模型状态）
```bash
cd ~/.openclaw/workspace/projects/study_AS
./start.sh
```

### 2. 检查状态
```bash
curl http://localhost:8000/status
```

返回示例：
```json
{
  "version": "1.0",
  "ai_provider": "auto",
  "local_model": {
    "enabled": true,
    "available": true,
    "path": ".../qwen2.5-7b-instruct-q4_k_m.gguf"
  },
  "api_models": {
    "kimi": true,
    "minimax": true,
    "mimo": true
  }
}
```

---

## 📥 本地模型下载

模型文件较大（约 4.5GB），首次需要下载：

```bash
cd ~/.openclaw/workspace/projects/study_AS
python3 download_model.py
```

下载来源：ModelScope 镜像（国内速度快）

---

## ⚙️ 配置说明

### 修改 AI 模式
编辑 `backend/main.py`：

```python
# 可选值: "auto", "local", "kimi", "minimax"
AI_PROVIDER = "auto"  # 默认：本地优先，失败时切换 API
```

| 模式 | 说明 |
|------|------|
| `auto` | 本地模型优先，失败时自动切换到 API |
| `local` | 仅用本地模型（无 fallback） |
| `kimi` | 仅用 Kimi API |
| `minimax` | 仅用 Minimax API |

---

## 🔧 技术细节

### 本地模型配置
```python
LOCAL_MODEL_PATH = "models/qwen/qwen2.5-7b-instruct-q4_k_m.gguf"
# 推理参数
n_ctx = 4096      # 上下文长度
n_threads = 8     # CPU 线程数
temperature = 0.7 # 创造性/确定性平衡
```

### 模型选择逻辑
```
用户请求 → 检查 AI_PROVIDER
    ├── "local" → 仅本地模型
    ├── "kimi"/"minimax" → 仅指定 API
    └── "auto" → 本地模型 → Kimi → mimo → Minimax
                    ↓ 失败
                自动切换下一个
```

---

## 💡 使用建议

### 场景 1：日常练习（推荐本地模型）
- 简单计算题
- 概念理解题
- 快速批改

### 场景 2：复杂题目（推荐 API）
- 多步推导证明
- 物理力学分析
- 需要详细讲解

### 场景 3：混合使用（auto 模式）
- 系统自动选择
- 平衡成本与效果
- 无需手动切换

---

## 🐛 故障排查

### 本地模型加载失败
```bash
# 检查模型文件是否存在
ls -lh models/qwen/qwen2.5-7b-instruct-q4_k_m.gguf

# 重新下载
python3 download_model.py
```

### 内存不足
- 7B 量化模型需要约 5GB 内存
- 如果内存不足，系统会自动切换到 API 模式

### CPU 占用高
- 本地模型推理时会占用较多 CPU
- 这是正常现象，推理完成后会释放

---

## 📈 性能优化

### 加速本地推理
1. **使用更多线程**: 修改 `n_threads`（默认 8，可根据 CPU 核心数调整）
2. **减少上下文**: 降低 `n_ctx`（默认 4096）
3. **GPU 加速**: 如有 NVIDIA GPU，可安装 CUDA 版本的 llama-cpp-python

### 减少 API 调用成本
- 简单题目优先使用本地模型
- 缓存常用题目的分析结果
- 设置合理的重试策略

---

## 🔄 更新日志

### 2025-03-20
- ✅ 集成 llama-cpp-python
- ✅ 添加 Qwen2.5-7B 本地模型支持
- ✅ 实现 auto 模式（本地 + API fallback）
- ✅ 添加 `/status` 端点查询模型状态
- ✅ 更新启动脚本自动检测模型

---

## 📚 参考

- [Qwen2.5 模型](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct-GGUF)
- [llama-cpp-python](https://github.com/abetlen/llama-cpp-python)
- [ModelScope 镜像](https://modelscope.cn/models/qwen/Qwen2.5-7B-Instruct-GGUF)
