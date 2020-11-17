
const scss = `
@import "~@/assets/scss/variable.scss";
@import "~@/assets/scss/mixin.scss";
`

module.exports = {
css: {
  loaderOptions: {
    scss: {
      prependData: scss
    }
  }
},
devServer: {
  overlay: {
    warnings: true,
    errors: true
  },
  // open: true, //配置自动启动浏览器
  proxy: { // 配置跨域
    '/api': {
        target: 'http://192.168.100.169:3000',
        ws: true,
        changOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
  }
},

lintOnSave: false
}