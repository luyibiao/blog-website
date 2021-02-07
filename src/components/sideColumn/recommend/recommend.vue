<!---->
<template>
  <transition name="blog-fadein" appear>
    <div class="components-recommend">
      <p class="recommend-article-title">推荐文章</p>
      <div class="components-recommend-content">
        <img-mask :src="item.logo || defaultImg" 
        v-for="(item, index) in recommendList"
        @click.native="go(item)" 
        :key="index" class="components-recommend-content-img">
          <template #inner>
            <div class="recommend-item_inner-tag">
              <labels :label="item.label" customClasses="reset-tags" />
              <p class="recommend-item_inner-title">{{item.title}}</p>
            </div>
          </template>
        </img-mask>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'recommend-hoticle',
  data() {
    return {
      recommendList: []
    }
  },
  created() {
    this.getrRecommendList()
  },
  methods: {
    // 获取推荐列表
    getrRecommendList() {
      this.$api.getArticleList({
        pageSize: 3,
        pageIndex: 0,
        recommend: 1,
        timeType: 'update_time'
      }).then(res => {
        this.recommendList = res.list
      })
    },
    go(item) {
      this.$overall.goArticleDetail(item, this.$route.query.code)
    }
  },
}
</script>

<style lang="scss">
  .components-recommend {
    border: 1px solid $main-white;
    border-top: 2px solid $main-black;
    overflow: hidden;
    height: 380px;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 5px 8px 0 #07111b1a;
    .recommend-article-title {
      text-align: center;
      padding: 23px 0;
      font-size: 20px;
      color: #000;
    }
    .components-recommend-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      .components-recommend-content-img {
        flex: 1;
        height: 0;
        .components-img-wrap_inner-box {
          bottom: 10px;
        }
        .components-tags {
          padding: 4px 6px;
          font-size: 12px;
        }
      }
      .components-recommend-content-img + .components-recommend-content-img {
        margin-top: 6px;
      }
    }
  }
</style>