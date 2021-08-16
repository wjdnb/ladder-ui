const componentList = [
  {
    groupName: '通用',
    groups: [{ name: '按钮', link: '/component/button' }],
  },
  {
    groupName: '布局',
    groups: [
      { name: '布局', link: '/component/layout' },
      { name: '栅格', link: '/component/grid' },
      { name: '分割线', link: '/component/divider' },
      { name: '间距', link: '/component/space' },
    ],
  },
  {
    groupName: '导航',
    groups: [
      { name: '导航菜单', link: '/component/menu' },
      { name: '锚点', link: '/component/anchor' },
    ],
  },
  {
    groupName: '反馈',
    groups: [
      { name: '全局提示', link: '/component/message' },
      { name: '文字提示', link: '/component/tooltip' },
    ],
  },
]

const docList = [
  {
    groupName: '介绍',
    groups: [
      {
        name: 'Ladder UI',
        link: '/docs/introduction',
      },
    ],
  },
  {
    groupName: '快速上手',
    groups: [
      {
        name: '安装',
        link: '/docs/install',
      },
    ],
  },
]

export { componentList, docList }
