

export default [
  {
    path: '/article-column',
    name: 'article-column',
    component: () => import(/* webpackChunkName: "article-column" */ './page/article-column'),
    meta: {
      title: '',
    }
  }
]