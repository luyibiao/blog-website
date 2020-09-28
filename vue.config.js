
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
    }
  },

  lintOnSave: false
}