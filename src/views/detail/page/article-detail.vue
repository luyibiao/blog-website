<template>
  <div class="article-detail">
    <layout-wrap>
      <breadcrumb-basic />
      <!--文章内容-->
      <contents :detail="detail"></contents>
      <!--评论-->
      <comment></comment>

      <template #right>
        <sideColumnAll />
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
    this.getDetail()
    // this.$store.commit('setCurrentTitle', 131)
  },
  methods: {
    getDetail() {
      this.query = this.$route.query
      this.$api.queryArticleDetail({id: this.query.id}).then(res => {
        this.detail = res
        this.$store.commit('setPareneCode', res.type)
      })
    }
  },
}
</script>

<style lang="scoped">
  
</style>