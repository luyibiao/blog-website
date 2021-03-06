import axios from 'axios';
import qs from 'qs'
import Vue from 'vue'

let url = '/api'
const appendApi = '/blog'

if (process.env.NODE_ENV === 'production') {
  url = process.env.VUE_APP_URL + 'api'
} 

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  // withCredentials: false
})

instance.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config;
}, (err) => {
  console.log('请求超时!');
  return Promise.resolve(err);
});

instance.interceptors.response.use((response) => {
  const {data} = response
  if (data.code === '1') {
    return response
  } else {
    switchType(data.code, response.data)
  }
}, (err) => {
    return Promise.reject(err)
});


function switchType(code, data) {
  const vm = new Vue()
  switch (code) {
    case '00':
      vm.$message.error(data.msg || '请求错误')
      break;
    case '-1':
      vm.$message.error(data.msg || '请重新登录')
      $router.push({path: '/login'})
      break;
    default:
      break;
  }
  return Promise.reject(data)
}


export default {
  post(url, params) {
    return instance.post(appendApi + url, params).then(result => {
      const { data } = result
      return data.data
    }).catch(e => {
      return e
    })
  },
}