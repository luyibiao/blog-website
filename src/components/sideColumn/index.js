// 热门文章
import hotArticle from './hotArticle/hot-article'
// 随便看看
import lookAround from './lookAround/look-around'
// 热门标签
import hotTags from './hotTags/hot-tags'
// 关于我
import aboutme from './aboutme/aboutme'
// 联系我
import contactme from './contactme/contactme'
// 网易云热评
import hotComments from './hotComments/hot-comments'
// 文章分类
import classification from './classification/main'
// 推荐文章
import recommendHoticle from './recommend/recommend'

export const componentsList = [
  hotArticle,
  lookAround,
  hotTags,
  aboutme,
  contactme,
  hotComments,
  classification,
  recommendHoticle
]

// 公共组件
const overallArr = [
  lookAround,
  hotTags,
  contactme
]

export default {
  // 热门文章
  'HOT-ARTICLE': [hotArticle],
  // 随便看看
  'LOOK-AROUND': [lookAround],
  // 热门标签
  'HOT-TAGS': [hotTags],
  // 关于我
  'ABOUTME': [aboutme],
  // 联系我
  'CONTACTME': [contactme],
  // 网易云热评
  'HOE-COMMENTS': [hotComments],
  // 文章分类
  'CLASS-IFICATION': [classification],
  // 推荐文章
  'RECOMMEND-HOTICLE': [recommendHoticle]
}