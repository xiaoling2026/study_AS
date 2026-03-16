# A-Level CIE Study App

A-Level CIE 学习应用 - 数学(9709) + 物理(9702)

## 目录结构

```
alevel-study-app/
├── index.html              # 主应用入口
├── css/                    # 样式文件
│   └── styles.css
├── js/                     # JavaScript 代码
│   ├── data/               # 数据文件
│   ├── generators/         # 题目生成器
│   └── utils/              # 工具函数
├── backend/                # 后端 API
│   ├── main.py
│   └── requirements.txt
├── docs/                   # 文档
│   ├── CLAUDE.md
│   ├── CODE_STANDARDS.md
│   ├── DEPLOY.md
│   ├── RENDER_DEPLOY.md
│   ├── SPEC.md
│   └── README.md
├── tests/                  # 测试文档
│   ├── test_checklist.md
│   └── test_report_v70.md
├── backups/                # 备份文件
├── package.json
├── vercel.json
└── .gitignore
```

## 知识点覆盖

### 数学 (9709) - 20个知识点
- P1: 二次方程、函数、坐标几何、三角函数、数列、微分、积分
- P2/P3: 对数、复数、向量、二项式展开、概率、排列组合、数值解法
- M1: 力与平衡、直线运动、牛顿定律、功和能

### 物理 (9702) - 28个知识点
- AS: 物理量、运动学、动力学、力/密度/压强、功/能/功率、固体形变、波、叠加、电学、直流电路、粒子物理
- A2: 圆周运动、引力、振动、热力学、电场、电容、磁场、交流电、量子物理、核物理、理想气体、医学物理、天文学

## 部署

```bash
vercel --prod
```
