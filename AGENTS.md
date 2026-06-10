# AGENTS.md

## 项目概述

- Astro + Starlight 文档站点，中文（zh-CN）
- 部署到 GitHub Pages，子路径 `/Astro-Blog/`
- 使用 `starlight-theme-galaxy` 主题
- 21 个 Markdown 文档文件

## 命令

- `npm run dev` — 本地开发服务器 localhost:4321
- `npm run build` — 生产构建到 `./dist/`
- `npm run preview` — 预览生产构建
- 无测试、lint 或 typecheck 脚本

## 内容结构

所有文档位于 `src/content/docs/`，使用 `.md` 或 `.mdx` 文件：

```
frontend/          # 前端技术
  html/            # HTML
  css/             # CSS
  javascript/      # JavaScript
  vue/             # Vue
  react/           # React
backend/           # 后端技术
  java/            # Java
  python/          # Python
  go/              # Go
middleware/        # 中间件
  mysql/           # MySQL
  redis/           # Redis
  elasticsearch/   # ElasticSearch
projects/          # 项目实战
```

## 关键约定

- 内部链接必须包含基础路径：`/Astro-Blog/...`
- 站点配置在 `astro.config.mjs`：侧边栏、语言、基础路径、自定义 CSS
- 内容使用 Starlight 的 docs schema（定义在 `src/content.config.ts`）
- 自定义样式在 `src/styles/global.css`（当前为空，仅主题样式）
- 文件命名约定：`01-主题入门.md`（如 `01-HTML基础.md`）
- 首页使用 `template: splash` 和 Starlight Card 组件

## 侧边栏配置

配置目录：`src/config/sidebar/`

- `types.ts` — 类型定义和 `autoItem()` 辅助函数
- `frontend.ts` — 前端技术
- `backend.ts` — 后端技术（Java、Python、Go）
- `middleware.ts` — 中间件
- `projects.ts` — 项目实战
- `index.ts` — 汇总导出
- 入口文件：`src/config/sidebar.ts`（重新导出）
- 自定义 Sidebar 组件：`src/components/Sidebar.astro`（添加"收起所有"按钮）

## 部署

- GitHub Actions 工作流：`.github/workflows/deploy.yml`
- 推送到 `main` 分支或手动触发
- 使用 Node 24，`withastro/action@v5`
- VSCode 推荐扩展：`astro-build.astro-vscode`

## 文档知识库分析

**当前内容覆盖：**
- 前端：HTML、CSS、JavaScript、Vue、React（各 1 篇入门）
- 后端：Java（5 篇）、Python（4 篇）、Go（3 篇）
- 中间件：MySQL、Redis、ElasticSearch（各 1 篇）
- 项目实战：目录存在但内容待补充

**潜在不足：**
1. **内容深度**：每主题仅 1 篇入门文档，缺乏进阶内容
2. **项目实战**：目录结构存在但实际文档缺失
3. **实践案例**：缺乏真实项目代码示例和最佳实践
4. **更新频率**：文档创建时间较早，技术栈可能已更新
5. **互动性**：缺乏搜索、评论或反馈机制
6. **多语言**：仅中文，无英文版本
7. **版本管理**：未见文档版本控制或变更日志
