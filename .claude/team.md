# EatWhat 开发团队

> Team Leader: Claude — 任务拆解、调度成员、代码审查、最终合并

## 角色卡片

| 角色 | 卡片 | 核心职责 | 核心禁止 |
|------|------|----------|----------|
| Product | `.claude/roles/product.md` | 需求澄清、验收标准、优先级 | 不写代码、不定技术方案 |
| Designer | `.claude/roles/designer.md` | 视觉规范、动效参数、样式审查 | 不写逻辑、不改功能 |
| Frontend | `.claude/roles/frontend.md` | React 组件、页面、动画实现 | 不定风格、不碰数据库 |
| Backend | `.claude/roles/backend.md` | Prisma schema、API Routes | 不写 UI、不碰样式 |
| QA | `.claude/roles/qa.md` | 测试验证、bug 报告 | 不改代码 |

每个角色卡片包含完整的：项目背景、技术约束、输出格式模板、质量门禁。

## 调度方式

Team Leader 在 Agent prompt 中嵌入角色卡片内容：

```
Agent(
  subagent_type: "Plan",
  description: "Designer: 设计 XXX",
  prompt: """
你是 EatWhat 项目的 UI/UX 设计师。
[此处嵌入 .claude/roles/designer.md 的关键约束]

任务：为 XXX 设计样式方案...
"""
)
```

## 工作流程

```
用户需求
  → Team Leader 拆解
    → Product（澄清需求）+ Designer（出样式）+ Backend（出 API）【可并行】
  → Team Leader 汇总确认
    → Frontend（实现 UI）+ Backend（实现 API）【可并行】
  → QA 验收测试
  → Team Leader 审查 & 合并 & 推送
```

## 通讯规则

- 成员间不直接对话，统一通过 Team Leader 中转
- 成员产出必须包含明确的文件路径和修改方案
- Team Leader 可接受、修改或要求返工
