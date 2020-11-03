<template>
  <div class="components-artilce">
    <!--文章列表-->
    <article-list>
      <article-item 
      :item="item"
      v-for="(item, index) in list" 
      @click.native="go(item)"
      :key="index">
        <template #tags v-if="$overall.getLabels(item.label).length">
          <tag v-for="(item, index) in $overall.getLabels(item.label)" :key="index">{{item.label}}</tag>
        </template>
      </article-item>
    </article-list>

    <!--分页-->
  </div>
</template>

<script>
export default {
  name: 'b-article',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      const sendData = {
        status: 'LINE'
      }
      this.$api.getArticleList(sendData).then(res => {
        this.list = res.list
      })
    },
    // 跳文章详情
    go(item) {
      this.$overall.setBreadcrumb({
        prevUrl: this.$route.path,
        currentTitle: item.title
      })
      this.$router.push({
        name: 'article-detail',
        query: {
          id: item.id
        }
      })
    }
  },
}
</script>