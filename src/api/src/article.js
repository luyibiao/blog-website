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
  // 查询文章类型
  queryArticleType(data) {
    return axios.post('/article/queryArticleType', data)
  },
  // 随便看看
  queryRandowArticle(data) {
    return axios.post('/article/queryRandowArticle', data)
  },
  // 查询文章子类型
  queryArticleChildType(data) {
    return axios.post('/article/queryArticleChildType', data)
  },
  // 设置观看数
  setWatchNum(data) {
    return axios.post('/article/setWatchNum', data)
  }
}