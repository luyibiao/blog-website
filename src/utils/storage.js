
import unicode from '@/utils/unicode'
// 设置浏览器缓存
const setCache = (key, value, {type = localStorage, timeStap = '', isunicode = false} = {}) => {
  let opt = {}
  if (!window.$vue.$overall.isObject(value)) {
    opt = {
      value,
      timeStap: timeStap ? (new Date().getTime() + timeStap * 60 * 1000) : ''
    }
  } else {
    opt['value'] = value
    opt['timeStap'] = timeStap ? (new Date().getTime() + timeStap * 60 * 1000) : ''
  }


  opt = JSON.stringify(opt)
  if (isunicode) {
    type.setItem('unicode-' + key, '11')
    key = unicode.stringEncode(key)
    opt = unicode.stringEncode(opt)
  }
  type.setItem(key, opt)
}

// 删除缓存
const removeCache = (key, type = localStorage) => {
  const instance = type.getItem('unicode-' + key)
  let keys = key
  if (instance) {
    keys = unicode.stringEncode(key)
    type.removeItem('unicode-' + key)
  }
  type.removeItem(keys)
}

// 读取浏览器缓存
const getCache = (key, type = localStorage) => {
  const instance = type.getItem('unicode-' + key)
  let isUnicCode = false
  let keys
  if (instance) {
    keys = unicode.stringEncode(key)
    isUnicCode = true
  }
  
  let opt = isUnicCode ? unicode.stringDecode(type.getItem(keys)) : type.getItem(key)
  opt = opt ? JSON.parse(opt) : {}

  if (opt.timeStap) {
    if (new Date().getTime() < opt.timeStap) {
      return opt.value
    } else {
      console.log(232323, key)
      removeCache(key, type)
      return undefined
    }
  } else {
    return opt.value
  }
}


export default {
  setCache,
  removeCache,
  getCache
}