export default {
  props: {
    column: {
      type: Object, 
      default: () => ({})
    },
    action: {
      type: String,
        default: 'render'
    }
  },
  render(h) {
    const vm = this;
    const {column, scope, action, ...others} = vm._props
    return column[action](column, h);
  }
}