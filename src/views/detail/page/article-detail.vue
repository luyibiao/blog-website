<template>
  <div class="article-detail">
    <layout-wrap>
      <breadcrumb-basic />
      <!--文章内容-->
      <contents></contents>
    </layout-wrap>
  </div>
</template>

<script>
import contents from '../components/contents'
export default {
  components: {
    contents
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