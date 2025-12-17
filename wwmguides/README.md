# WWM Guides - Where Winds Meet 游戏攻略网站

## 项目说明

这是为《燕云十六声》海外版 Where Winds Meet 打造的攻略引导网站。

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
wwmguides/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 全局布局
│   ├── guides/            # 攻略模块
│   ├── culture/           # 文化科普模块
│   ├── world/             # 世界观模块
│   └── shop/              # 商品关联模块
├── components/            # 复用组件
│   ├── Header.tsx        # 导航栏
│   └── Footer.tsx        # 页脚
└── public/               # 静态资源

```

## 内容模块

### 1. 实用攻略 (/guides)
- 新手指南
- 战斗系统详解
- 武器精通
- 技能构建

### 2. 文化科普 (/culture)
- What is Wuxia?
- What is Jianghu?
- Wuxia vs Xianxia

### 3. 世界观 (/world)
- 势力介绍
- 地区地图
- 关键角色

### 4. 商品关联 (/shop)
- 传统武器
- 服饰文化
- 符号图案

## SEO 优化

网站已配置基础 SEO：
- 每个页面独立的 metadata
- 语义化 HTML 结构
- Open Graph 标签
- 响应式设计

## 部署

推荐部署到 Vercel：

```bash
npm run build
```

或直接连接 GitHub 仓库到 Vercel 自动部署。

## 后续扩展

- [ ] 添加搜索功能
- [ ] 集成 CMS 系统
- [ ] 多语言支持
- [ ] 评论系统
- [ ] 数据分析
