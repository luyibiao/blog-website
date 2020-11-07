import axios from '../axios'

export default {
  // 发送验证码
  sendCode(data) {
    return axios.post('/user/sendCode', data)
  },
  // 登录
  checkBlogLogin(data) {
    return axios.post('/user/checkBlogLogin', data)
  }
}