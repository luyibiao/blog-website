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
            {{detail.type}}
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
    <div class="content_inner">
      <div v-html="detail.content"></div>
      <!--打赏活点赞-->
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {},
      detail: {}
    }
  },
  created() {
    this.init()
    this.getDetail()
  },
  methods: {
    init() {
      this.query = this.$route.query || {}
    },
    getDetail() {
      this.$api.queryArticleDetail({id: this.query.id}).then(res => {
        this.detail = res
      })
    }
  },
}
</script>

<style lang="scss">
  .article-detail-content {
    background: #fff;
    padding: 40px 40px;
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
    }
  }
</style>