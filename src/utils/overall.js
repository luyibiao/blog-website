export default {
  // 十六进制转rgba 
  colorToRGB(val, opa) {
    var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
      var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

      if (!pattern.test(val)) { //如果值不符合规则返回空字符
          return '';
      }

      var v = val.replace(/#/, ''); //如果有#号先去除#号
      var rgbArr = [];
      var rgbStr = '';

      for (var i = 0; i < 3; i++) {
          var item = v.substring(i * 2, i * 2 + 2);
          var num = parseInt(item, 16);
          rgbArr.push(num);
      }

      rgbStr = rgbArr.join();
      rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
      return rgbStr;
  },

  // 设置vuex中面包屑的值
  setBreadcrumb({prevUrl, currentTitle} = {}) {
    store.commit('setbBreadcrumbInfo', {
      prevTitle: store.state.currentTitle || '首页',
      prevUrl: prevUrl || '/',
      currentTitle: currentTitle || $vue.$route.meta.title
    })
  },
  // 得到label标签
  getLabels(val) {
    if (!val) return []
    return JSON.parse(val)
  },
  // 判断是否为对象
  isObject: val => Object.prototype.toString.call(val).slice(8, -1) === 'Object',
  //  是否为空对象
  objectsEmpty: (val, isEnumerable = false) =>
    !!(Object.prototype.toString.call(val) === '[object Object]' ?
    isEnumerable ?
    Reflect.ownKeys(val) :
    Object.keys(val).length :
    false),

  // 随机十六进制颜色
  randomHexColorCode: _ => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  },
  goArticleDetail(item, code, prevUrl) {
    let name = '首页'
    if (code) {
      name = window.store.state.articleType.find(v => v.code === code).name
    }
    window.store.commit('setCurrentTitle', name)
    this.setBreadcrumb({
      prevUrl: prevUrl ? prevUrl : code ? window.$vue.$route.path + '?code=' + code : window.$vue.$route.path ,
      currentTitle: item.title
    })
    window.$vue.$router.push({
      name: 'article-detail',
      query: {
        id: item.id
      }
    })
  },

  // 分割名字第一个字符串
  splitName(val) {
    if (!val) return ''
    if (val.length === 1) return val
    return val.split('')[0]
  },
  
  // 检测移动/PC设备
  detectDeviceType : _ => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                                  ? 'Mobile'
                                  : 'Pc'
}