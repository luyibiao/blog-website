

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './page/home'),
    meta: {
      title: '九七个人博客',
    }
  }
]