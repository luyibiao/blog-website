import axios from '../axios'

export default {
  // 获取图形验证码
  sendimgcode() {
    return axios.post('/comment/sendimgcode')
  },
  // 增加评论
  addComment(data) {
    return axios.post('/comment/addComment', data)
  },
  // 查询评论列表
  queryComments(data) {
    return axios.post('/comment/queryComments', data)
  },
  // 获取评论数
  queryCommonetCount(data) {
    return axios.post('/comment/queryCommonetCount', data)
  }
}