import axios from '../axios'

// 查询文章列表 
export default {
  getArticleList(data) {
    return axios.post('/article/getArticleList', data)
  },
  // 查询文章详情
  queryArticleDetail(data) {
    return axios.post('/article/queryArticleDetail', data)
  },
}