<template>
  <div class="views-skill">
    <layout-wrap>
      <breadcrumb-basic />
      <!--文章列表-->
      <article-list>
        <article-item v-for="(item, index) in 3 " :key="index">
          <template #tags>
            <tag v-for="(item, index) in 5" :key="index">生活</tag>
          </template>
        </article-item>
      </article-list>
      <template #right>
        <sideColumnAll />
      </template>
    </layout-wrap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnList: []
    }
  },
  created() {
    this.columnList = this.$sideColumn[this.$route.name]
    // console.log(this.$route, 1111)
  },
}
</script>