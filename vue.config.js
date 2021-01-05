
const getIPAdress = require('./src/utils/getIp')

const scss = `
@import "~@/assets/scss/variable.scss";
@import "~@/assets/scss/mixin.scss";
`
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: '/blog/',
  productionSourceMap: false, // 不要map文件
  css: {
    loaderOptions: {
      scss: {
        prependData: scss
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' ) {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
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