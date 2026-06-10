# AGENTS.md

## 项目概述

- Astro + Starlight 文档站点，中文（zh-CN）
- 部署到 GitHub Pages，子路径 `/Astro-Blog/`

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
- 自定义样式在 `src/styles/custom.css`

## 侧边栏配置

Starlight v0.39.0+ 的 autogenerate 语法：

```js
{ label: 'HTML', items: [{ autogenerate: { directory: 'frontend/html' } }] }
```

- 前端、后端技术、中间件：手动分组 + 子目录自动生成
- 项目实战：完全自动生成

## 部署

- GitHub Actions 工作流：`.github/workflows/deploy.yml`
- 推送到 `main` 分支或手动触发
- 使用 Node 24，`withastro/action@v5`
