# EatWhat 项目初始化会话日志

> 日期：2026-05-14
> 分支：初始化阶段（Phase 1 — H5 快速上线）

---

## 一、项目初始化

### 1.1 创建 Next.js 项目

```bash
# 临时移走 PRD.md（create-next-app 不允许非空目录）
mv /Users/dracula/eat-what/PRD.md /tmp/PRD.md

# 初始化 Next.js 项目
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*" \
  --turbopack \
  --no-git

# 恢复 PRD.md
mv /tmp/PRD.md /Users/dracula/eat-what/PRD.md
```

结果：Next.js 16.2.6 + React 19.2.4 + TailwindCSS v4 + TypeScript 5

### 1.2 安装依赖

```bash
npm install framer-motion
```

结果：framer-motion 12.38.0

---

## 二、目录结构创建

```bash
mkdir -p components lib types public/dishes
mkdir -p services prisma hooks styles docs
mkdir -p .claude/{skills,hooks,mcp}

# 空目录占位
for dir in services prisma hooks styles docs .claude/skills .claude/hooks .claude/mcp; do
  touch $dir/.gitkeep
done
```

---

## 三、新建文件清单

| 文件 | 用途 |
|------|------|
| `types/index.ts` | Dish、Step 类型定义 |
| `lib/dishes.ts` | 12 道菜品 mock 数据 + 制作步骤 |
| `lib/utils.ts` | getRandomDish() 随机选取工具函数 |
| `components/FloatingEmojis.tsx` | 背景漂浮食物 emoji 装饰动画 |
| `components/HeroButton.tsx` | "今天吃什么" 主按钮（脉冲呼吸 + 光晕） |
| `components/SlotMachine.tsx` | 老虎机式随机滚动动画组件 |
| `components/StepsList.tsx` | 制作步骤列表（编号圆圈 + stagger 动画） |
| `CLAUDE.md` | Claude Code 项目规则文件 |
| `public/dishes/.gitkeep` | 静态菜品图片目录占位 |

---

## 四、修改文件清单

| 文件 | 变更内容 |
|------|----------|
| `app/globals.css` | 替换默认样式 → 暖色调主题，径向渐变背景，中文字体栈 |
| `app/layout.tsx` | zh-CN 语言、PWA meta 标签、viewer 配置、theme-color |
| `app/page.tsx` | 替换默认页面 → 完整首页（标题 + 老虎机 + 按钮 + 结果卡片 + 步骤列表） |

---

## 五、删除文件

```bash
rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

---

## 六、构建验证

```bash
npm run build
```

结果：✓ 编译成功，TypeScript 检查通过，静态页面生成成功

---

## 七、完整项目结构（最终）

```
eat-what/
├── .claude/
│   ├── hooks/
│   ├── mcp/
│   └── skills/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # 暖色主题 + TailwindCSS v4
│   ├── layout.tsx           # 根布局 (zh-CN, PWA meta)
│   └── page.tsx             # 首页
├── CLAUDE.md                # 项目规则
├── components/
│   ├── FloatingEmojis.tsx   # 背景漂浮 emoji
│   ├── HeroButton.tsx       # 主按钮
│   ├── SlotMachine.tsx      # 老虎机动画
│   └── StepsList.tsx        # 制作步骤列表
├── docs/
├── hooks/
├── lib/
│   ├── dishes.ts            # 菜品数据 + 步骤数据
│   └── utils.ts             # 随机选取工具
├── prisma/
├── public/
│   └── dishes/              # 静态菜品图片
├── services/
├── styles/
├── types/
│   └── index.ts             # 类型定义
├── package.json
└── tsconfig.json
```

---

## 八、技术栈总结

| 层 | 技术 |
|----|------|
| 框架 | Next.js 16 (App Router, Turbopack) |
| UI 库 | React 19 |
| 语言 | TypeScript 5 |
| 样式 | TailwindCSS v4 (@tailwindcss/postcss) |
| 动画 | Framer Motion 12 |
| 字体 | 系统原生中文字体栈 (PingFang SC, Microsoft YaHei) |
| 部署 | Vercel (后续配置) |
| 数据库 | PostgreSQL + Prisma (Phase 2) |
