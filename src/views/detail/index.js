

export default [
  {
    path: '/article-detail',
    name: 'article-detail',
    component: () => import(/* webpackChunkName: "article-detail" */ './page/article-detail'),
    meta: {
      title: '文章详情',
    }
  }
]