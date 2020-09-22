

export default [
  {
    path: '/prose',
    name: 'prose',
    component: () => import(/* webpackChunkName: "prose" */ './page/prose'),
    meta: {
      title: '随笔散文',
    }
  }
]