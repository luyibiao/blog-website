<!--友情链接-->
<template>
  <div class="friends-link">
    <column-title>友情链接</column-title>
    <div class="friends-link-content">
      <tag 
      v-for="(item, index) in linkList" 
      :key="index" 
      isClickAble 
      @click.native="go(item)"
      :type="item.color">
        <span class="friends-link-content_inner">{{item.name}}</span>
      </tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'friends-link',
  data() {
    return {
      linkList: [{
        name: '张征的博客',
        url: 'http://zzsun.top/',
        color: 'primary'
      }]
    }
  },
  methods: {
    go(item) {
      window.open(item.url, '_blank')
    }
  },
}
</script>

<style lang="scss">
  .friends-link {
    background: #fff;
    margin-bottom: 20px;
    padding: $fs-30 $fs-20x;
    box-sizing: border-box;
    box-shadow: 0 5px 8px 0 #07111b1a;
    .friends-link-content {
      margin-top: 20px;
      .components-tags {
        padding: 16px 15px;
      }
      .friends-link-content_inner {
        font-size: 25px;
      }
    }
  }
</style>