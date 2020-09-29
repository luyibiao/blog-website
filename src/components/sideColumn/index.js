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

export const componentsList = [
  hotArticle,
  lookAround,
  hotTags,
  aboutme,
  contactme,
  hotComments
]

// 公共组件
const overallArr = [
  lookAround,
  hotTags,
  contactme
]

export default {
  'home': [
    hotArticle,
    lookAround,
    hotTags,
    aboutme,
    contactme
  ],
  'skill': [
    ...overallArr,
  ],
  'prose': [
    hotComments,
    ...overallArr,
  ],
  'novel': [
    ...overallArr
  ],
  'mine': [
    ...overallArr
  ]
}