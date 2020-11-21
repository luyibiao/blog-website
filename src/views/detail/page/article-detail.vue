<template>
  <div class="article-detail">
    <layout-wrap>
      <breadcrumb-basic />
      <!--文章内容-->
      <contents :detail="detail"></contents>
      <!--评论-->
      <comment></comment>

      <template #right>
        <aboutme />
        <contactme />
      </template>
    </layout-wrap>
  </div>
</template>

<script>
import contents from '../components/contents'
import comment from '../components/comment'
export default {
  components: {
    contents,
    comment
  },
  data() {
    return {
      detail: {},
      query: {}
    }
  },
  created() {
    this.query = this.$route.query
    // 观看数上报
    this.setWatchNum()
    this.getDetail()
    // this.$store.commit('setCurrentTitle', 131)
  },
  methods: {
    getDetail() {
      this.$api.queryArticleDetail({id: this.query.id}).then(res => {
        this.detail = res
        this.$store.commit('setPareneCode', res.type)
        
      })
    },
    setWatchNum() {
      this.$api.setWatchNum({
        article_id: this.query.id
      }).then()
    }
  },
}
</script>

<style lang="scoped">
  
</style>