import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../pages/homepage.vue'
import PublicSection from '../components/public-section.vue'
import Install from '../pages/install.vue'
import Grid from '../pages/grid.vue'
import Layout from '../pages/layout.vue'
import Divider from '../pages/divider.vue'
import Space from '../pages/space.vue'
import Introduction from '../pages/introduction.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: Index,
  },
  {
    path: '/docs',
    component: PublicSection,
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
    component: PublicSection,
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
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory('/ladder'),
  routes,
})

export default router
