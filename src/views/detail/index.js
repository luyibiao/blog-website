

export default [
  {
    path: '/article-detail',
    name: 'article-detail',
    component: () => import(/* webpackChunkName: "article-detail" */ './page/article-detail'),
    meta: {
      title: '文章详情',
    }
  },
  {
    path: '/mobile-detail',
    name: 'mobile-detail',
    component: () => import(/* webpackChunkName: "mobile-detail" */ './page/mobile-detail'),
    meta: {
      title: '文章详情',
    }
  }
]