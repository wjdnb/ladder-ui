import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Debug from '../pages/debug.vue'

// import Index from '../pages/homepage.vue'
// import Template from '../components/template.vue'
// import Install from '../pages/install.md'
// import Introduction from '../pages/introduction.md'

// import Grid from '@/grid/demo/grid.md'
// import Layout from '@/layout/demo/layout.md'
// import Divider from '@/divider/demo/divider.md'
// import Space from '@/space/demo/space.md'
// import Anchor from '@/anchor/demo/anchor.md'
// import Menu from '@/menu/demo/menu.md'
// import Message from '@/message/demo/message.md'
// import Tooltip from '@/tooltip/demo/tooltip.md'
// import Button from '@/button/demo/button.md'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'homepage',
  //   component: Index,
  // },
  {
    path: '/debug',
    name: 'debug',
    component: Debug,
  },
  // {
  //   path: '/docs',
  //   component: Template,
  //   children: [
  //     {
  //       path: 'introduction',
  //       name: 'introduction',
  //       component: Introduction,
  //     },
  //     {
  //       path: 'install',
  //       name: 'install',
  //       component: Install,
  //     },
  //   ],
  // },
  // {
  //   path: '/component',
  //   component: Template,
  //   children: [
  //     {
  //       path: 'divider',
  //       name: 'divider',
  //       component: Divider,
  //     },
  //     {
  //       path: 'grid',
  //       name: 'grid',
  //       component: Grid,
  //     },
  //     {
  //       path: 'layout',
  //       name: 'layout',
  //       component: Layout,
  //     },
  //     {
  //       path: 'space',
  //       name: 'space',
  //       component: Space,
  //     },
  //     {
  //       path: 'anchor',
  //       name: 'anchor',
  //       component: Anchor,
  //     },
  //     {
  //       path: 'menu',
  //       name: 'menu',
  //       component: Menu,
  //     },
  //     {
  //       path: 'message',
  //       name: 'message',
  //       component: Message,
  //     },
  //     {
  //       path: 'tooltip',
  //       name: 'tooltip',
  //       component: Tooltip,
  //     },
  //     {
  //       path: 'button',
  //       name: 'button',
  //       component: Button,
  //     },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHashHistory('/ladder'),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
