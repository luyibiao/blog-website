// 首页
import home from './home'
// 技术分享
import skill from './skill'
// 随笔散文
import prose from './prose'
// 书屋
import novel from './novel'
// 关于我
import mine from './mine'
// 留言
import contact from './contact'
// 详情
import detail from './detail'
// 书籍一级栏目路由
import articleColumn from './column'

export default [
  ...home,
  ...skill,
  ...prose,
  ...novel,
  ...mine,
  ...contact,
  ...detail,
  ...articleColumn
]