

export default [
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ './page/mine'),
    meta: {
      title: '关于我',
    }
  }
]