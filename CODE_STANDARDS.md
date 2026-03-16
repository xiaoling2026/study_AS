# 代码规范与最佳实践

> 基于 Claude Code 官方最佳实践整理
> 参考来源: [awattar/claude-code-best-practices](https://github.com/awattar/claude-code-best-practices)

---

## 一、核心原则 (SOLID)

| 原则 | 说明 | 违反表现 |
|------|------|---------|
| **S**ingle Responsibility | 单一职责，一个函数只做一件事 | 函数过长（>50行） |
| **O**pen/Closed | 对扩展开放，对修改关闭 | 频繁修改已有代码 |
| **L**iskov Substitution | 里氏替换，子类可替换父类 | 继承层次混乱 |
| **I**nterface Segregation | 接口分离 | 万能接口 |
| **D**ependency Inversion | 依赖倒置，依赖抽象而非具体 | 硬编码依赖 |

---

## 二、项目结构规范

### 推荐结构
```
project/
├── CLAUDE.md              # 项目上下文文档（必须）
├── index.html             # 入口文件
├── css/
│   └── styles.css        # 样式文件
├── js/
│   ├── main.js           # 主逻辑
│   ├── data/
│   │   ├── questions.js  # 题库数据
│   │   └── topics.js    # 知识点数据
│   ├── generators/
│   │   └── aiGenerator.js # AI生成逻辑
│   └── utils/
│       └── helpers.js    # 工具函数
└── tests/                 # 测试文件
```

### 单文件限制
- **HTML文件**: < 500行
- **CSS文件**: < 1000行
- **JavaScript文件**: < 500行
- **单函数**: < 50行

---

## 三、命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 函数 | 动词+名词 | `generateQuestions()` |
| 变量 | 名词 | `currentQuestion` |
| 常量 | 全大写+下划线 | `MAX_QUESTIONS` |
| 布尔 | is/has/can | `isLoggedIn` |
| CSS类 | 小写+连字符 | `.btn-primary` |

---

## 四、代码审查清单

每次提交前必须检查：

### 1. 功能完整性
- [ ] 所有需求都已实现
- [ ] 边界情况已处理
- [ ] 错误处理已添加

### 2. 代码质量
- [ ] 无重复代码 (DRY)
- [ ] 函数短小单一 (SRP)
- [ ] 命名清晰有意义
- [ ] 必要的注释已添加

### 3. 测试验证
- [ ] 核心功能已测试
- [ ] 边界条件已测试
- [ ] 无明显语法错误

### 4. 结构组织
- [ ] 代码已分离 (HTML/CSS/JS)
- [ ] 数据已提取到配置
- [ ] 无超过限制的大文件

---

## 五、重构检查清单

重构前必须：

1. **✅ 备份当前代码**
   ```bash
   cp -r project project-backup-$(date +%Y%m%d)
   ```

2. **✅ 验证备份完整**
   - 检查文件数量
   - 尝试运行备份版本

3. **✅ 小步迭代**
   - 每次只改一个文件
   - 改完立即测试

4. **✅ 全面测试**
   - 功能测试
   - 边界测试
   - 多轮验证

---

## 六、Git提交规范

### 提交信息格式
```
<类型>: <简短描述>

<详细说明（可选）>

<关联Issue（可选）>
```

### 类型标识
- `feat`: 新功能
- `fix`: Bug修复
- `refactor`: 重构
- `docs`: 文档
- `test`: 测试
- `chore`: 维护

### 示例
```
feat: 添加AI题目生成功能

- 新增generateQuestions函数
- 支持三种难度生成
- 添加易混淆错误选项

Closes #123
```

---

## 七、避免代码屎山的黄金法则

### ❌ 禁止的做法
1. 一个函数超过100行
2. 所有代码放在一个文件
3. 硬编码数据和配置
4. 没有注释和文档
5. 复制粘贴代码
6. 不测试就提交

### ✅ 推荐的做法
1. 函数 < 50行
2. 分离HTML/CSS/JS
3. 配置提取到JSON/JS
4. 添加JSDoc注释
5. 提取公共函数
6. 测试后再提交

---

## 八、本项目(A-Level)重构计划

### 当前问题
- 单文件1163行
- 数据硬编码
- 缺少CLAUDE.md

### 重构步骤
1. 创建CLAUDE.md项目文档
2. 分离HTML/CSS结构到独立文件
3. 提取题库数据到data/questions.js
4. 提取知识点数据到data/topics.js
5. 提取AI生成逻辑到generators/
6. 提取工具函数到utils/
7. 添加基础测试

---

*最后更新: 2026-03-15*
*基于 Claude Code Best Practices*
