

export default [
  {
    path: '/novel',
    name: 'novel',
    component: () => import(/* webpackChunkName: "novel" */ './page/novel'),
    meta: {
      title: '书屋',
    }
  }
]