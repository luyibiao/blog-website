
import Vue from 'vue'
// 轮播
import swipe from './swipe'
import jsComp from './js';
// 图标
import iconfont from './iconfont'
// 侧边栏所有栏目
import sideColumn, { componentsList } from './sideColumn'
// 布局
import layoutWrap from './layout'
// 推荐
import recommend from './recommend'
// 基础组件
import basic from './basic'
// 文章列表
import article from './articleList'
// 面包屑
import breadcrumb from './breadcrumb'
// 弹框
import dialog from './dialog'
// 弹框载体
import popup from './popup';

var conponents = [
  ...swipe,
  ...iconfont,
  ...layoutWrap,
  ...recommend,
  ...basic,
  ...article,
  ...componentsList,
  ...breadcrumb,
  ...dialog,
  ...popup,
]

// 原型上挂载所有侧边栏组件
Vue.prototype.$sideColumn = sideColumn


//出口函数为组件安装函数
const install = vm => {
  conponents.forEach(component => {
    vm.component(component.name, component)
  });
  for (const key in jsComp) {
    if (!vm.prototype.hasOwnProperty(key)) {
      Vue.prototype[key] = jsComp[key];
    }else{
      console.warn( key + '被占用')
    }
  }
}
export default {
  install,
}