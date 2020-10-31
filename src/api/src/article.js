import axios from '../axios'

// 查询文章列表 
export default {
  getArticleList(data) {
    return axios.post('/article/getArticleList', data)
  }
}