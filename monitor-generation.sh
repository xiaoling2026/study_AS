#!/bin/bash
# 监控知识点生成进度

echo "=========================================="
echo "  知识点生成进度监控"
echo "=========================================="
echo ""

while true; do
    if [ -f ~/.openclaw/workspace/projects/study_AS/js/generated-topics.json ]; then
        COUNT=$(cat ~/.openclaw/workspace/projects/study_AS/js/generated-topics.json | python3 -c "import json,sys; print(len(json.load(sys.stdin)))" 2>/dev/null || echo "0")
        echo "$(date '+%H:%M:%S') - Generated: $COUNT/17 topics"
        
        # 显示已生成的知识点
        cat ~/.openclaw/workspace/projects/study_AS/js/generated-topics.json | python3 -c "
import json,sys
data=json.load(sys.stdin)
for k,v in data.items():
    print('  ✓', v['name'])
" 2>/dev/null
        
        if [ "$COUNT" -ge 17 ]; then
            echo ""
            echo "✅ All topics generated!"
            break
        fi
    fi
    
    # 检查进程是否还在运行
    if ! pgrep -f "generate-topics.py" > /dev/null; then
        echo ""
        echo "⚠️  Generation process stopped"
        break
    fi
    
    echo ""
    sleep 60
done
