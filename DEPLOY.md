# Vercel 部署指南

## 前置要求
1. Vercel 账号 (vercel.com)
2. GitHub/GitLab 仓库

## 部署步骤

### 方法1: Vercel CLI (推荐)

```bash
# 安装 Vercel CLI
npm i -g vercel

# 进入项目目录
cd alevel-study-app

# 登录
vercel login

# 部署
vercel --prod
```

### 方法2: Git 集成

1. 推送代码到 GitHub
2. 访问 https://vercel.com/new
3. 导入 GitHub 仓库
4. 设置：
   - Framework Preset: Other
   - Build Command: (留空)
   - Output Directory: (留空)

## 环境变量

在 Vercel Dashboard 中设置：
- `KIMI_API_KEY`: 你的Kimi API密钥

## 注意事项

1. 后端API会部署为 `/api/*` 路由
2. 前端会自动调用这些API
3. 免费版有100GB带宽限制
