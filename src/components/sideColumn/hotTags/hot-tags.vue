<!--热门标签-->
<template>
  <div class="components-hot-tags is-silde-start" :class="classes">
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
      list: [],
      isExit: false,
      isShow: false
    }
  },
  created() {
    this.getList()
  },
 
  computed: {
    classes() {
      return [
        this.isShow && 'is-sildeshow-active'
      ]
    }
  },
  mounted() {
    const ele = document.getElementById('app')
    const _this = this
    ele.addEventListener('scroll', function(e) {
      _this.checkEl()
    })
    this.checkEl()
  },
  methods: {
    getList() {
      this.$api.queryHotLabel().then(res => {
        this.list = res.list
      })
    },
    checkEl() {
      if (!this.isExit && this.$overall.elementIsVisibleInViewport(this.$el, true)) {
        this.isExit = true
        this.isShow = true
      }
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
  box-shadow: 0 5px 8px 0 #07111b1a;
  
  .components-hot-tags_list {
    margin-top: 20px;
  }
}
</style>