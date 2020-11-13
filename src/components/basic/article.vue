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
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters(['getArticleType'])
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
      const code = this.$route.query.code
      let name = '首页'
      if (code) {
        name = this.getArticleType.find(v => v.code === code).name
      }
      this.$store.commit('setCurrentTitle', name)
      this.$overall.setBreadcrumb({
        prevUrl: code ? this.$route.path + '?code=' + code : this.$route.path ,
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