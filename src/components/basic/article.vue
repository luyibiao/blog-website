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
    <div class="pagination-box">
      <el-pagination
        background
        @size-change="getList(pageIndex = 1)"
        @current-change="currentChange"
        :page-size.sync="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total"
        class="pagination" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'b-article',
  data() {
    return {
      list: [],
      type: '',
      pageSize: 10,
      pageIndex: 1,
      total: 0,
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
      const arr = [
        'HOME'
      ]
      const code = this.$route.query.code
      if (code && !arr.includes(code)) {
        this.type = code
      }
      const sendData = {
        type: this.type,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex - 1,
      }
      this.$api.getArticleList(sendData).then(res => {
        this.list = res.list
        this.total = res.total;
      })
    },
    currentChange(v) {
      this.pageIndex = v
      this.getList()
    },
    // 跳文章详情
    go(item) {
      this.$overall.goArticleDetail(item, this.$route.query.code)
      return
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

<style lang="scss">
  .components-artilce {
    .pagination-box {
      margin-top: 20px;
      background: rgba($color: #fff, $alpha: .4);
      padding: 20px 0;
      box-sizing: border-box;
      text-align: center;
    }
  }
</style>