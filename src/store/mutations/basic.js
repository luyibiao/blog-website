export default {
  setbBreadcrumbInfo(state, val) {
    state.breadcrumbInfo = val
  },
  setCurrentTitle(state, val) {
    state.currentTitle = val
  },
  setArticleType(state, val) {
    state.articleType = val
  },
  setPareneCode(state, val) {
    state.pareneCode = val
  },
  setMineInfo(state, val) {
    state.mineInfo = val || {}
  },
  setCurrentMusicInfo(state, val) {
    state.currentMusicInfo = val
  }
}