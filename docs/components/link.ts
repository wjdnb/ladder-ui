const componentList = [
  {
    groupName: '通用',
    groups: [{ zh: '按钮', en: 'Button', path: '/component/button' }],
  },
  {
    groupName: '布局',
    groups: [
      { zh: '布局', en: 'Layout', path: '/component/layout' },
      { zh: '栅格', en: 'Grid', path: '/component/grid' },
      { zh: '分割线', en: 'Divider', path: '/component/divider' },
      { zh: '间距', en: 'Space', path: '/component/space' },
    ],
  },
  {
    groupName: '导航',
    groups: [
      { zh: '导航菜单', en: 'Menu', path: '/component/menu' },
      { zh: '锚点', en: 'Anchor', path: '/component/anchor' },
    ],
  },
  {
    groupName: '反馈',
    groups: [
      { zh: '全局提示', en: 'Message', path: '/component/message' },
      { zh: '文字提示', en: 'Tooltip', path: '/component/tooltip' },
    ],
  },
]

const docList = [
  {
    groupName: '介绍',
    groups: [
      {
        zh: 'Ladder UI',
        path: '/docs/introduction',
      },
    ],
  },
  {
    groupName: '快速上手',
    groups: [
      {
        zh: '安装',
        path: '/docs/install',
      },
    ],
  },
]

export { componentList, docList }
