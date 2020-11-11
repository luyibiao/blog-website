import axios from '../axios'

export default {
  // 获取图形验证码
  sendimgcode() {
    return axios.post('/comment/sendimgcode')
  }
}