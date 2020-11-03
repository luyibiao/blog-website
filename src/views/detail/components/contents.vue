<!--文章内容-->
<template>
  <div class="article-detail-content">
    <div class="content_header">
      <div>
         <tag v-for="(item, index) in $overall.getLabels(detail.label)" :key="index">{{item.label}}</tag>
      </div>
    </div>
    <div class="content_inner"></div>
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
    console.log(565656)
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
    background: $main-white;
  }
</style>