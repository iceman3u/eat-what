# 项目进度

> 最后更新: 2026-05-15

## 当前阶段

**Phase 2** — Supabase + Prisma 数据层，API 就绪

## 最近动态

- **2026-05-15**: Supabase 数据库接入，Prisma schema 创建（Dish + Step），API 路由实现（CRUD + random），50 道菜 + 219 步骤已 seed。修复 pooler 连接问题（`aws-1` 而非 `aws-0`）。配置 MCP 服务器。
- **2025-05-15**: 老虎机核心交互稳定（3 轮修复），菜单扩展至 50 道菜，Gemini 生图脚本可用，清理了死代码

## 下一步

> 待用户指定。可选方向：页面 UI 完善、交互细节（筛选/收藏/历史）、用户系统、部署。

## 已完成

- [x] Next.js 16 项目初始化
- [x] 老虎机选菜核心交互（Framer Motion 动画、点击停止、easing）
- [x] 菜单 50 道菜（`lib/dishes.ts`）
- [x] Gemini 生图脚本（`scripts/generate-images.ts`）
- [x] 菜品静态图片（`public/dishes/`）
- [x] Agent Team 角色体系（`.claude/roles/`, `.claude/team.md`）
- [x] 清理死代码和模板文件
- [x] Session 间进度追踪机制（`.claude/progress.md`）
- [x] Supabase Postgres 数据库接入 + pooler 连接修复
- [x] Prisma schema + seed（50 dishes, 219 steps）
- [x] API 路由: `/api/dishes` CRUD + random
- [x] MCP 服务器配置 (Playwright + Supabase)

## 待推进

- [ ] 页面 UI 完善（首页、结果页等）
- [ ] 更多交互细节（筛选、收藏、历史记录等）
- [ ] 用户系统 / 认证
- [ ] 部署
