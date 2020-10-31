import axios from '../axios'

export default {
  // 获取轮播图信息
  queryBaner() {
    return axios.post('/home/queryBaner')
  }
}