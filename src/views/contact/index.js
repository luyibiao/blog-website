

export default [
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ './page/contact'),
    meta: {
      title: '留言',
    }
  }
]