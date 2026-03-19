# MathJax 修复说明

## 问题
公式显示功能突然失效

## 原因分析
MathJax 配置虽然在页面中，但加载顺序可能有问题：
1. 原配置在 `</head>` 之前，但在其他脚本之后
2. 可能导致 MathJax 加载时机不对

## 修复内容

### 1. 将 MathJax 移到 `<head>` 开头
- 位置：第 10-31 行（紧接在 `<title>` 之后）
- 确保在其他脚本之前加载

### 2. 添加加载成功日志
```javascript
startup: {
    ready: function() {
        console.log('MathJax loaded successfully');
        MathJax.startup.defaultReady();
    }
}
```

### 3. 删除底部重复配置
- 删除了原来在 `</head>` 之前的重复 MathJax 配置

## 文件变更

### 备份文件
- `index.html.backup.20260319_213851` - 修改前的完整备份

### 修改后的文件
- `index.html` - 已修复版本

## 回滚方法

如果修复后有问题，可以恢复备份：
```bash
cp index.html.backup.20260319_213851 index.html
```

## 测试建议

1. 清除浏览器缓存（Ctrl+Shift+R 强制刷新）
2. 打开浏览器开发者工具（F12）
3. 查看 Console 是否有 "MathJax loaded successfully" 日志
4. 检查 Network 标签，确认 `tex-svg.js` 是否成功加载（200 状态码）
5. 测试包含公式的页面内容是否正常显示

## 如果仍有问题

可能的其他原因：
1. CDN 网络问题 - 可以尝试更换 CDN 源
2. 浏览器插件拦截 - 禁用广告拦截器测试
3. 本地缓存 - 清除浏览器缓存或使用无痕模式

## 备用 CDN 源

如果默认 CDN 有问题，可以替换为：
```html
<!-- jsDelivr (默认) -->
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

<!-- unpkg 备用 -->
<script src="https://unpkg.com/mathjax@3/es5/tex-svg.js"></script>

<!-- cdnjs 备用 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.min.js"></script>
```
