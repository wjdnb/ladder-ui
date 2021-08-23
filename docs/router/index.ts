import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../pages/homepage.vue'
import Template from '../components/template.vue'

import Test from '../pages/test.vue'

import Install from '../pages/install.md'
import Grid from '../pages/grid.md'
import Layout from '../pages/layout.md'
import Divider from '../pages/divider.md'
import Space from '../pages/space.md'
import Introduction from '../pages/introduction.md'

import Anchor from '../pages/anchor.md'
import Menu from '../pages/menu.md'
import Message from '../pages/message.md'
import Tooltip from '../pages/tooltip.md'
import Button from '../pages/button.md'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: Index,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/docs',
    component: Template,
    children: [
      {
        path: 'introduction',
        name: 'introduction',
        component: Introduction,
      },
      {
        path: 'install',
        name: 'install',
        component: Install,
      },
    ],
  },
  {
    path: '/component',
    component: Template,
    children: [
      {
        path: 'divider',
        name: 'divider',
        component: Divider,
      },
      {
        path: 'grid',
        name: 'grid',
        component: Grid,
      },
      {
        path: 'layout',
        name: 'layout',
        component: Layout,
      },
      {
        path: 'space',
        name: 'space',
        component: Space,
      },
      {
        path: 'anchor',
        name: 'anchor',
        component: Anchor,
      },
      {
        path: 'menu',
        name: 'menu',
        component: Menu,
      },
      {
        path: 'message',
        name: 'message',
        component: Message,
      },
      {
        path: 'tooltip',
        name: 'tooltip',
        component: Tooltip,
      },
      {
        path: 'button',
        name: 'button',
        component: Button,
      },
    ],
  },
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
