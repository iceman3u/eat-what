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

## Agent Team

项目使用多角色 Agent 团队协作开发，团队定义见 `.claude/team.md`。

角色分工：
- **Product** — 需求分析、验收、优先级
- **Designer** — 视觉规范、动画、样式审查
- **Frontend** — React 组件、页面、交互
- **Backend** — API、Prisma、数据库
- **QA** — 测试、验收、bug 报告

Team Leader (Claude) 负责任务拆分、调度、代码审查、最终合并。成员不直接对话，统一通过 Team Leader 中转。

### 如何调度

用 Agent 工具调度成员，prompt 中必须包含：
1. 角色身份声明（"你是 EatWhat 项目的 XXX"）
2. 关键约束（从 `.claude/roles/<role>.md` 提取 2-3 条最相关的禁止项）
3. 任务描述 + 输出格式要求
4. 需要读取的文件路径清单

详见 `.claude/team.md` 和各角色卡片。
