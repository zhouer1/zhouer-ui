import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Zhouer UI',
  description: '测试组件库，用于个人学习',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/zhouer-ui/src/:comp/(.*)': 'components/:comp/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },

    ],

    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
