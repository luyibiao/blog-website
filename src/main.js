import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components';
import overall from '@/utils/overall'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import VueParticles from 'vue-particles'

import api from '@/api'
import vueFilters from '@/filters/filters.js'

import { Message, Loading, Dialog, Input } from 'element-ui';

import Vue2Emoji from 'vuejs-emoji'
Vue.use(Vue2Emoji)


// Vue.component(Loading.name, Loading);
// Vue.component(Button.name, Button);

Vue.use(Loading.directive);

Vue.use(Dialog);
Vue.use(Input);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message

Vue.use(VueParticles)


Vue.use(VueAwesomeSwiper, /* { default global options } */)

//注入所有组件
components.install(Vue);

// 注册过滤器
Vue.mixin({
  filters: vueFilters
});

Vue.config.productionTip = false

Vue.prototype.$overall = overall
Vue.prototype.$api = api

// 路由守卫
router.beforeEach((to, from, next) => {
 
  document.title = to.meta.title
  next()
})

window.$router = router

window.$vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
