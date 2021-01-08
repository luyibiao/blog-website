import axios from '../axios'

export default {
  // 获取轮播图信息
  queryBaner() {
    return axios.post('/home/queryBaner')
  },
  // 查询热门标签
  queryHotLabel(data) {
    return axios.post('/home/queryHotLabel', data)
  },
  // 查询关于我
  queryMineInfo() {
    return axios.post('/home/queryMineInfo')
  },
  // 歌曲
  queryWYYmusic() {
    return axios.post('/home/queryWYYmusic')
  }
}