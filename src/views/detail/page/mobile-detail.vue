<template>
  <div class="article-detail">
    <div class="article-detail-header">
      <p class="title">{{detail.title}}</p>
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
    <div class="article-detail-content ql-container ql-snow">
      <div v-html="detail.content" class="ql-editor"></div>
    </div>
    <!--评论列表-->
    <div class="components-comment-content">
      <div class="content-title">评论列表</div>
      <div class="components-comment-list">
        <div class="components-comment-item" v-for="(item, index) in list" :key="index">
          <div class="header-circle" :style="headStyles(item)">{{$overall.splitName(item.userName)}}</div>
          <div class="components-comment-item-inner">
            <p class="title">{{item.userName}}</p>
            <p class="detail">{{item.comment_content}}</p>
            <p class="time">{{item.create_time}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      typeName: '',
      detail: {},
      query: {},
      list: [],
      pageSize: 10,
      pageIndex: 1,
    }
  },
  created() {
    this.query = this.$route.query
    this.getDetail()
    this.getList()
  },
  computed: {
    ...mapGetters(['getArticleType'])
  },
  methods: {
    getDetail() {
      this.$api.queryArticleDetail({id: this.query.id}).then(res => {
        res.content = decodeURIComponent(res.content)
        this.detail = res
        this.$store.commit('setCurrentTitle', this.$vueFilters.formatStatus(this.detail.type, this.getArticleType))
        this.$store.commit('setPareneCode', res.type)
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
    headStyles(item) {
      item = item || {}
      return {
        background: item.bg_color || '#15B6E6'
      }
    },
    getList() {
      const sendData = {
        article_id: this.query.id,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex - 1,
      }
      this.$api.queryComments(sendData).then(res => {
        this.list = res.list
      })
    },
  },
}
</script>

<style lang="scss">
  .article-detail {
    .article-detail-header {
      background: #fff;
      overflow: hidden;
      padding-bottom: 10px;
      .title {
        font-weight: bold;
        color: #273746;
        font-size: 20px;
        margin: 10px 0 10px;
        line-height: 1.5;
        text-align: center;
        
      }
      .special {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #748594;
        justify-content: center;
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
    }

    .article-detail-content {
      padding: 20px 0 0;
      margin-top: 10px;
      .ql-editor {
        img {
          max-width: 100%;
        }
      }
    }

    .components-comment-content {
      margin-top: 30px;
      background: #fff;
      .content-title {
        border-bottom: 1px solid #e7e7e7;
        padding: 15px 10px;
        box-sizing: border-box;
        color:  #2e2d38;
        font-weight: 500;
        font-size: 18px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          display: block;
          width: 70px;
          height: 2px;
          background:  #2e2d38;
          bottom: 0;
        }
      }

      .components-comment-list {
        margin-top: 10px;
        .components-comment-item {
          display: flex;
          align-items: flex-start;
          padding: 15px 10px;
          box-sizing: border-box;
          .header-circle {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            // background: #15B6E6;
            line-height: 50px;
            color: #fff;
            font-size: 25px;
            font-weight: 500;
            text-align: center;
            user-select: none;
          }

          .components-comment-item-inner {
            flex: 1;
            margin-left: 10px;
            .title {
              color: #3cbf4c;
              font-size: 16px;
              margin-bottom: 5px;
            }
            .detail {
              font-size: 13px;
              color:  #333;
              line-height: 1.5;
              margin-bottom: 7px;
            }
            .time {
              // margin-top: -3px;
              font-size: 12px;
              color: #888;
            }
          }
        }

        .components-comment-item + .components-comment-item {
          border-top: 1px solid  #e7e7e7;
        }
      }
    }
  }
</style>