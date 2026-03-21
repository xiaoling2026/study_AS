#!/bin/bash
# 定时检查知识点生成进度并合并

LOG_FILE="/tmp/topic-generation-monitor.log"

echo "$(date): 开始监控知识点生成..." >> $LOG_FILE

while true; do
    # 检查生成文件
    if [ -f ~/.openclaw/workspace/projects/study_AS/js/generated-topics.json ]; then
        COUNT=$(cat ~/.openclaw/workspace/projects/study_AS/js/generated-topics.json | python3 -c "import json,sys; print(len(json.load(sys.stdin)))" 2>/dev/null || echo "0")
        
        if [ "$COUNT" -gt 0 ]; then
            echo "$(date): 已生成 $COUNT 个知识点" >> $LOG_FILE
            
            # 自动合并到主文件
            cd ~/.openclaw/workspace/projects/study_AS
            python3 merge-topics.py >> $LOG_FILE 2>&1
            
            if [ "$COUNT" -ge 17 ]; then
                echo "$(date): ✅ 所有知识点生成完成！" >> $LOG_FILE
                # 发送完成通知（如果有通知功能）
                break
            fi
        fi
    fi
    
    # 检查进程是否还在运行
    if ! pgrep -f "generate-topics.py" > /dev/null; then
        echo "$(date): ⚠️ 生成进程停止，重新启动..." >> $LOG_FILE
        cd ~/.openclaw/workspace/projects/study_AS
        nohup python3 generate-topics.py >> /tmp/generate-topics.log 2>&1 &
    fi
    
    # 每5分钟检查一次
    sleep 300
done
