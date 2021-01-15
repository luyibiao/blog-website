<template>
  <div class="components-classification">
    <column-title>文章分类</column-title>
    <div class="components-classification-content">
      <el-tree
      :props="props"
      :load="loadNode"
      @node-click="nodeClick"
      :indent="10"
      accordion 
      lazy>
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <span class="title">
            <b-icon name="blog-wenzhang" v-if="node.isLeaf" size="16" class="icon"/>{{ node.label }}</span>
          <span v-if="!node.isLeaf" class="count">
            {{data.article_total}}篇
          </span>
        </div>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classification',
  data() {
    return {
      activeName: '',
      query: {},
      list: [],
      articleList: [],
      props: {
        label: 'name',
        isLeaf: 'leaf',
      }
    }
  },
  created() {
    this.query = this.$route.query
  },
  methods: {
    loadNode(node, resolve) {
      if(node.level === 0) {
        this.getChildList().then(res => {
          setTimeout(_ => {
            const arrs = document.querySelectorAll('.el-tree-node')
            res.map((v, i) => {
              if (v.article_total == 0) {
                arrs[i].classList.add('el-tree-node-disabled')
              }
            })
            console.log()
          }, 100)
          return resolve(res)
        })
        return
      }
      if (node.level > 1) return resolve([]);
      console.log(node)
      
      this.getArticle(node.data).then(res => {
        return resolve(res)
      })

    },
    getChildList() {
      if (!this.query.code) return Promise.reject()
      return this.$api.querySecondTypeCount({
        articletype_code: this.query.code
      }).then(res => {
        this.list = res.list || []
        return this.list
      })
    },
    change(v) {
      if (!v) return
      this.getArticle(this.list[parseInt(v)])
    },
    getArticle(v) {
      return this.$api.getArticleList({
        pageSize: 10,
        pageIndex: 0,
        child_type: v.code
      }).then(res => {
        this.articleList = res.list
        this.articleList.map(v => {
          v.name = v.title
          v.leaf = true
          v.isChildLeaf = true
        })
        return this.articleList
      })
    },
    nodeClick(data, node) {
      if (data.isChildLeaf) {
        this.$overall.goArticleDetail(data, this.$route.query.code)
      }
    }
  },
}
</script>

<style lang="scss">
  .components-classification {
    background: #fff;
    margin-bottom: 20px;
    padding: $fs-30 $fs-20x;
    box-sizing: border-box;
    .components-classification-content {
      margin-top: 25px;
      max-height: 450px;
      overflow: auto;
      .custom-tree-node {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .title {
          color:#748594;
          font-size: 15px;
          .icon {
            margin-right: 5px;
          }
        }
        .count {
          color: #999;
          font-size: 13px;
          margin-left: 10px;
        }
      }
      .el-tree-node {
        user-select: none;
      }
      .el-tree-node-disabled {
        cursor: not-allowed;
        position: relative;
        width: 100%;
        height: 100%;
        pointer-events: none;
        &::after {
          content: '';
          position: absolute;
          display: block;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          cursor: not-allowed;
          z-index: 100;
          width: 100%;
          height: 100%;
          
        }
      }
      .el-tree-node + .el-tree-node {
        margin-top: 5px;
      }
    }
  }
</style>