module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/variable.scss";`
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