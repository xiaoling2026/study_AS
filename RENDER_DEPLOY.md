# Render 部署配置

## 部署步骤

1. 访问 https://dashboard.render.com/
2. 点击 "New +" → "Web Service"
3. 连接 GitHub 仓库：xiaoling2026/202603_study
4. 配置：
   - Name: alevel-study-api
   - Environment: Python 3
   - Build Command: `pip install -r alevel-study-app/backend/requirements.txt`
   - Start Command: `cd alevel-study-app/backend && uvicorn main:app --host 0.0.0.0 --port 10000`
5. 添加环境变量：
   - `MOONSHOT_API_KEY`: sk-BzEYb4esUAq3qVdURq6swV7EYpEOwJsrvZm9QdvO1DnNCfDr
   - `MINIMAX_API_KEY`: sk-cp-PiUMYB55KWSYbZNBBAFYKgmuQX7fwUIruTewGiUWZT4cvkHq4cGcq7Lclpkjeton5SG0wAtl7eEwbIujzwP8ZR8uhzbe92u0Vu1dGvzgsDUz26NlsyIkOPc
   - `MINIMAX_GROUP_ID`: 2030562674139468012
6. 点击 "Create Web Service"

## 部署后

- 后端地址：https://alevel-study-api.onrender.com
- 前端地址：https://xiaoling2026.github.io/202603_study

## 修改前端 API 地址

部署完成后，修改 `index.html` 中的 API 地址：
- 把 `http://localhost:8000` 改为 `https://alevel-study-api.onrender.com`
