

export default [
  {
    path: '/skill',
    name: 'skill',
    component: () => import(/* webpackChunkName: "skill" */ './page/skill'),
    meta: {
      title: '技术分享',
    }
  }
]