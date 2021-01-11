<!--文章内容-->
<template>
  <div class="article-detail-content">
    <div class="content_header">
      <div v-if="$overall.getLabels(detail.label).length" class="label">
         <tag v-for="(item, index) in $overall.getLabels(detail.label)" :key="index">{{item.label}}</tag>
      </div>
      <div class="title">
        {{detail.title}}
      </div>
      <div class="special">
        <!--作者-->
        <div class="article-item_content_info-item">
          <span >
            <b-icon name="blog-touxiang" size="25px"/>
          </span>
          <span class="info-item-_inner">{{detail.author}}</span>
        </div>
        <!--专题-->
        <div class="article-item_content_info-item">
          <span>
            <b-icon name="blog-riqi" size="15px" class="article-item_content_info-icon"/>
          </span>
          <span class="info-item-_inner">
            {{getType() || typeName}}
          </span>
        </div>
        <!--日期-->
        <div class="article-item_content_info-item">
          <span>
            <b-icon name="blog-riqi" size="15px" class="article-item_content_info-icon"/>
          </span>
          <span class="info-item-_inner">
            {{detail.create_time | formatDatetime('yyyy-MM-dd')}}
          </span>
        </div>
        <!--观看数-->
        <div class="article-item_content_info-item">
          <span>
            <b-icon name="blog-guankanyanjing" size="22px"/>
          </span>
          <span class="info-item-_inner">{{detail.watch_num}}</span>
        </div>
      </div>
    </div>
    <div class="content_inner ql-container ql-snow">
      <div v-html="detail.content" class="ql-editor"></div>
      <!--打赏和点赞-->
      <div class="reward">
        <div class="reward-like">
          <b-icon name="blog-xihuan2" size="18px" class="like-icon"/>
          <span class="reward-inner">赞({{detail.thumbs_num}})</span>
        </div>
        <div class="reward-r" ref="share" @click="onShare">
          <b-icon name="blog-fenxiang1" size="18px"/>
          <span class="reward-inner"></span>
        </div>
      </div>
    </div>

    <!--上一篇下一篇-->
    <div class="about-article">
      <img-mask :src="upArticleInfo.logo" v-if="$overall.objectsEmpty(upArticleInfo)" @click.native="clickArticle(upArticleInfo)">
        <template #inner>
          <div class="about-article-tag">
            <labels :label="upArticleInfo.label" customClasses="reset-tags" />
            <p class="about-article-title">上一篇：{{upArticleInfo.title}}</p>
          </div>
        </template>
      </img-mask>
      <img-mask :src="nextArticleInfo.logo" v-if="$overall.objectsEmpty(nextArticleInfo)" @click.native="clickArticle(nextArticleInfo)">
        <template #inner>
          <div class="about-article-tag">
            <labels :label="nextArticleInfo.label" customClasses="reset-tags" />
            <p class="about-article-title">下一篇：{{nextArticleInfo.title}}</p>
          </div>
        </template>
      </img-mask>
    </div>

    <template >
      <share ref="shareInner" v-show="isShareShow"/>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Popper from 'v-poppers'
import share from './share'
export default {
  components: {
    share
  },
  props: {
    detail: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters(['getArticleType', 'getBreadcrumbInfo'])
  },
  data() {
    return {
      query: {},
      typeName: '',
      upArticleInfo: {},
      nextArticleInfo: {},
      s: null,
      options: {
        isAppendParentNode: true,
        offset: {
          y: 10
        }
      },
      isShareShow: false
    }
  },
  created() {
    this.query = this.$route.query
    this.queryNextArticle()
    this.queryUpArticle()
  },
  mounted() {
    this.s = new Popper(this.$refs.shareInner.$el, this.$refs.share, this.options)
    console.log(this.s)
  },
  methods: {
    onShare() {
      this.isShareShow = !this.isShareShow
      this.$nextTick(_ => {
        this.s.show()
      })
    },
    getType() {
      if (!this.detail.child_type) {
        this.typeName = this.detail.type ? this.$vueFilters.formatStatus(this.detail.type, this.getArticleType) : ''
      } else {
        const info = this.$api.queryArticleChildType({
          code: this.detail.child_type
        }).then(res => {
          this.typeName = res.name
        })
      }
    },

    // 上一条
    queryUpArticle() {
      this.$api.queryUpArticle({
        id: this.query.id
      }).then(res => {
        this.upArticleInfo = res
      })
    },
    // 下一条
    queryNextArticle() {
      this.$api.queryNextArticle({
        id: this.query.id
      }).then(res => {
        this.nextArticleInfo = res
      })
    },

    clickArticle(item) {
      this.$overall.goArticleDetail(item, '', this.getBreadcrumbInfo.prevUrl)
    }
  },
}
</script>

<style lang="scss">
  .article-detail-content {
    background: #fff;
    padding: 40px 40px 50px;
    box-sizing: border-box;
    .content_header {
      position: relative;
      padding: 0px 0px 25px;
      box-sizing: border-box;
      .label {
        margin-bottom: 15px;
      }
      .title {
        font-weight: bold;
        color: #273746;
        font-size: 25px;
        margin:   0px 0 20px;
        line-height: 1.5;
      }
      .special {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #748594;
        .article-item_content_info-item {
          display: flex;
          align-items: center;
          margin-right: 20px;
          .info-item-_inner {
            margin-left: 3px;
          }
          .article-item_content_info-icon {
            vertical-align: middle;
            // margin-right: 5px;
          }
        }
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 40px;
        background: #e7e7e7;
        // width: 100%;
        height: 1px;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background: #282828;
      }
    }

    .content_inner {
      padding: 35px 0 0;
      .ql-editor {
        img {
          max-width: 100%;
        }
      }
      .reward {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
        .reward-like {
          color: #748594;
          display: flex;
          align-items: center;
          border: 1px solid #748594;
          padding: 5px 8px;
          cursor: pointer;
          position:relative;
          user-select: none;
          .like-icon {
            
          }
          &.reward-like-active {
            color: #F74840;
            border-color:#F74840;
          }
        }
        .reward-r {
          color: #748594;
          border: 1px solid rgba($color:  #748594, $alpha: .6);
          padding: 5px 20px;
          cursor: pointer;
          transition: border-color .5s;
          &:hover {
            border-color: rgba($color:  #748594, $alpha: 1);
          }
        }
        .reward-inner {
          margin-left: 6px;
          font-size: 14px;
          
        }
        > div + div {
          margin-left: 5px;
        }
      }
    }
    .about-article {
      display: flex;
      height: 180px;
      margin-top: 70px;
      > div {
        flex: 1;
        max-width: 50%;
      }
      > div + div {
        margin-left: 2px;
      }
      .about-article-tag {
        .about-article-title {
          line-height: 1.3;
        }
      }
    }
  }

  @keyframes rewardlike {
    0%   {transform: scale(1);}
    50%  {transform: scale(1.3)}
    100% {transform: scale(1)}
  }
</style>