# CLAUDE.md - EatWhat 项目规则

## 项目概要

《吃什么》是一款 AI-native 美食决策 H5 应用，帮助用户快速决定今天吃什么。

## 技术栈

- Next.js 16 (App Router) + React 19 + TypeScript
- TailwindCSS v4 (`@tailwindcss/postcss`)
- Framer Motion (动画)
- 无后端依赖 (Phase 1 使用 mock 数据)

## 核心规则

1. **TypeScript 全栈统一** — 所有代码使用 TypeScript，类型定义集中在 `types/` 目录
2. **静态菜品图库** — 菜品图片统一存放于 `public/dishes/`，为静态 jpg 文件
3. **禁止 AI 生图** — 用户端不允许 AI 生成菜品图片，所有图片来自静态图库
4. **H5 优先** — 移动端体验优先，所有 UI 必须在 375px 宽度下完美展示
5. **高颜值轻量** — 暖色治愈系视觉风格，极简交互，卡片式布局，Framer Motion 动效

## 项目结构

```
├── app/           # Next.js App Router (页面 + 路由)
├── components/    # UI 组件 (客户端组件带 "use client")
├── lib/           # 工具库、数据、纯函数
├── types/         # TypeScript 类型定义
├── public/dishes/ # 静态菜品图片
├── prisma/        # Prisma schema (Phase 2)
└── services/      # API 服务 (Phase 2)
```

## 视觉规范

- 背景色: `#fffbeb` (warm amber-50)
- 主色调: orange-400 → rose-500 渐变
- 卡片: 白色半透明 + 柔和阴影 + 大圆角
- 文字色: orange-950 (暖深棕)
- 字体: 系统原生中文字体栈 (PingFang SC, Microsoft YaHei)
- 无暗色模式

## 组件规范

- 客户端组件必须标注 `"use client"`
- 使用 Framer Motion 的 `motion` 组件实现动画
- 交互状态: animate (常态)、whileHover、whileTap
- 卡片圆角: rounded-2xl 或 rounded-3xl
- 阴影: 柔和暖色 shadow, 不使用 harsh shadow

## 行为准则

以下准则适用于所有 Agent 成员（Team Leader 在调度时嵌入角色 prompt）。核心原则：**克制优于炫技，验证优于假设。**

### 1. 先想再写 (Think Before Coding)

- 有歧义时先列出假设，不确定就停下来问
- 存在多种解读时，呈现选项而不是默默选一个
- 有更简单的方案时提出来
- 别用"看起来很忙"来掩盖困惑

### 2. 简单优先 (Simplicity First)

- 只写解决问题所需的最少代码
- 不为单一用途创建抽象层
- 不为"可能需要"写扩展性
- 不处理不可能发生的异常
- 200 行能压到 50 行就重写

**自测标准：一个资深工程师看了会不会说过度工程？如果会，简化。**

### 3. 精确修改 (Surgical Changes)

- 不改相邻代码、注释、格式
- 不重构没坏的东西
- 匹配现有代码风格
- 发现无关的遗留问题可以说，但别顺手改
- 只清理你自己改动造成的未使用 import / 变量 / 函数
- **每行改动都应该能追溯到用户的具体需求**

### 4. 目标驱动 (Goal-Driven Execution)

- 把模糊任务转化为可验证目标
- 多步骤任务先写计划：`1. [步骤] → 验证: [检查项]`
- 用 `npm run build` 作为最低验证门禁
- 好的目标让你能独立推进，坏的目标需要反复问用户

### Team Leader 额外准则

- 调度 Agent 前，确认任务目标清晰可验证
- 接收成员产出后，不是转发而是审查：逻辑是否正确、是否符合简洁原则、是否有越界修改
- 发现返工时，明确指出与哪个准则的冲突
- 合并代码前亲自跑 `npm run build`

## Agent Team

项目使用多角色 Agent 团队协作开发，团队定义见 `.claude/team.md`，角色卡片见 `.claude/roles/`。

角色分工：
- **Product** — 需求分析、验收、优先级
- **Designer** — 视觉规范、动画、样式审查
- **Frontend** — React 组件、页面、交互
- **Backend** — API、Prisma、数据库
- **QA** — 测试、验收、bug 报告

Team Leader (Claude) 是用户唯一的交互对象。职责：
- 理解用户意图，自动判断需要哪些角色参与
- 拆解任务，决定串行还是并行调度
- 审核成员产出，修改或要求返工
- 最终落地代码，提交推送
- **用户不需要指定角色或调度方式** — Team Leader 全权负责

成员之间不直接对话，统一通过 Team Leader 中转。
