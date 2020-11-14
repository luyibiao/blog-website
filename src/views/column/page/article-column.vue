<template>
  <div class="article-column">
    <layout-wrap :isExitColumn="isExitColumn">
      <breadcrumb-basic />
      <!--文章列表-->
      <b-article />
      <template #right v-if="isExitColumn">
        <sideColumnAll @finish="finish"/>
      </template>
    </layout-wrap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isExitColumn: true,
      query: {}
    }
  },
  computed: {
    ...mapGetters(['getArticleType'])
  },
  created() {
    this.query = this.$route.query
    this.init()
  },
  methods: {
    init() {
      const instance = this.getArticleType.find(v => v.code === this.query.code) || {}
      this.$store.commit('setPareneCode', this.query.code)
      this.$store.commit('setCurrentTitle', '首页')
      this.$overall.setBreadcrumb({currentTitle: instance.name})
      
      if (instance.side_column) {
        this.sideColumn = true
      }
    },
    finish(val) {
      this.isExitColumn = val
    }
  },
}
</script>

<style lang="scss">
  .article-column {}
</style>