<!--热门标签-->
<template>
  <div class="components-hot-tags">
    <column-title>热门标签</column-title>
    <div class="components-hot-tags_list">
      <tag 
      v-for="(item, index) in list" 
      :key="index" 
      :isClickAble="true"
      size="mini"
      >{{item.label}}</tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot-tags',
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
      this.$api.queryHotLabel().then(res => {
        this.list = res.list
      })
    }
  },
}
</script>

<style lang="scss">
.components-hot-tags {
  background: #fff;
  margin-bottom: 20px;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  .components-hot-tags_list {
    margin-top: 20px;
  }
}
</style>