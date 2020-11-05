<template>
  <div class="recommend-item img-mask">
    <img-mask :src="bg">
      <template #inner>
        <div class="recommend-item_inner-tag">
          <tag class="reset-tags">生活</tag>
          <p class="recommend-item_inner-title">好舒服十多个开始的打暑假工接口接口辅导机构</p>
        </div>
      </template>
    </img-mask>
  </div>
</template>

<script>
export default {
  name: 'recommend-item',
  props: {
    bg: {
      type: String,
      default: ''
    }
  },
  computed: {
    styles() {
      return {
        backgroundImage: `url(${this.bg})`
      }
    }
  },
}
</script>

<style lang="scss">
.recommend-item {
  position: relative;
  flex: 1;
  height: 220px;
  cursor: pointer;
 
  .recommend-item_inner-tag {
    // position: absolute;
    // left: 35px;
    // right: 35px;
    // bottom: 30px;
    // z-index: 1000;
  }
  .recommend-item_inner-title {
    color: #fff;
    font-size: 16px;
    // margin-top: 10px ;
    line-height: 1.5;
  }
}
.recommend-item + .recommend-item {
  margin-left: 30px;
}
</style>