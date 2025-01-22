import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FragmistyDocs",
  description: "破碎迷雾文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '官网', link: 'https://www.fragmisty.com' },
      { text: '关于', link: '/about' },
      { text: '更新日志', link: '/timeline'}
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '最简化流程', link: '/easiest-start' },
        ]
      },
      {
        text: '绑定',
        items: [
          { text: '绑定须知', link: '/bind/tips'},
          { text: '个人绑定', link: '/bind/self' },
          { text: '群组绑定', link: '/bind/group' },
        ]
      },
      {
        text: '使用',
        items: [
          { text: '织者', link: '/misty/weaver' },
          { text: '角色卡', link: '/misty/role'},
          { text: '创建迷雾', link: '/misty/creat'},
        ]
      },
      {
        text: 'Bot使用',
        items: [
          { text: '迷雾指令', link: '/bot/usage'}
        ]
      },
      {
        text: '使用条款',
        items: [
        ]
      },
      {
        text: '更多',
        items: [
          {text: '更新日志', link: '/timeline'},
          {text: '关于', link: '/about'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/dwuQOWsa7C' }
    ]
  }
})
