import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基本信息
  title: '张家权的技术博客',
  description: '机械 · 电气 · 数控 · AI — 记录我的跨界学习之旅',
  lang: 'zh-CN',

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客文章', link: '/posts/' },
      { text: '关于我', link: '/about' },
    ],

    // 侧边栏
    sidebar: {
      '/posts/': [
        {
          text: '博客文章',
          items: [
            { text: '我的第一篇博客', link: '/posts/hello-world' },
          ]
        }
      ]
    },

    // 社交链接（后续可以改成你自己的）
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    // 页脚
    footer: {
      message: 'Powered by VitePress | Hosted on Cloudflare Pages',
      copyright: '© 2026 张家权'
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // 中文界面
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
  },

  // 最后更新时间
  lastUpdated: true,
})
