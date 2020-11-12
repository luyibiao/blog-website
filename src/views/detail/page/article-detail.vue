<template>
  <div class="article-detail">
    <layout-wrap>
      <breadcrumb-basic />
      <!--文章内容-->
      <contents></contents>
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
      
    }
  },
  created() {
    // this.$store.commit('setCurrentTitle', 131)
  },
}
</script>

<style lang="scoped">
  
</style>