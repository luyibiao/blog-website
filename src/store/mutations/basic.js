export default {
  setbBreadcrumbInfo(state, val) {
    state.breadcrumbInfo = val
  },
  setCurrentTitle(state, val) {
    console.log(val)
    state.currentTitle = val
  }
}