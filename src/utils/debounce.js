export const debounce = ({callback = null, reset = null, seconds = 100}) => {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
      reset && typeof reset === 'function' && reset.apply(this)
    }
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this)
      timer = null
    }, seconds)
  }
}