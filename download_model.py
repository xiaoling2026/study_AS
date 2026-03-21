#!/usr/bin/env python3
"""
下载 Qwen2.5-7B-Instruct GGUF 模型
使用 ModelScope 国内镜像加速
"""
import os
import urllib.request
import sys

MODEL_DIR = os.path.expanduser("~/.openclaw/workspace/projects/study_AS/models/qwen")
MODEL_URL = "https://www.modelscope.cn/models/qwen/Qwen2.5-7B-Instruct-GGUF/resolve/master/qwen2.5-7b-instruct-q4_0.gguf"
MODEL_FILE = os.path.join(MODEL_DIR, "qwen2.5-7b-instruct-q4_0.gguf")

def download():
    os.makedirs(MODEL_DIR, exist_ok=True)
    
    if os.path.exists(MODEL_FILE):
        size = os.path.getsize(MODEL_FILE) / 1024 / 1024
        print(f"✅ 模型文件已存在: {size:.1f} MB")
        return
    
    print(f"⬇️  正在下载模型...")
    print(f"   URL: {MODEL_URL}")
    print(f"   目标: {MODEL_FILE}")
    print(f"   预计大小: ~4.5 GB")
    print("")
    
    try:
        urllib.request.urlretrieve(MODEL_URL, MODEL_FILE)
        size = os.path.getsize(MODEL_FILE) / 1024 / 1024
        print(f"✅ 下载完成! 大小: {size:.1f} MB")
    except Exception as e:
        print(f"❌ 下载失败: {e}")
        if os.path.exists(MODEL_FILE):
            os.remove(MODEL_FILE)
        sys.exit(1)

if __name__ == "__main__":
    download()
