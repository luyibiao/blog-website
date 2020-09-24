<template>
  <div class="recommend-item img-mask">
    <div class="recommend-item_img">
      <img :src="bg" />
    </div>
    <div class="recommend-item_inner">
      <div class="recommend-item_inner-tag">
        <tag>生活</tag>
        <p class="recommend-item_inner-title">好舒服十多个开始的打暑假工接口接口辅导机构</p>
      </div>
    </div>
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
  .recommend-item_img {
    height: 100%;
    img {
      display: block;
      width: 100%;
      max-height: 100%;
    }
  }
  .recommend-item_inner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    .recommend-item_inner-tag {
      position: absolute;
      left: 35px;
      right: 35px;
      bottom: 30px;
      z-index: 1000;
    }
    .recommend-item_inner-title {
      color: #fff;
      font-size: 16px;
      // margin-top: 10px ;
      line-height: 1.5;
    }
  }

  &.img-mask {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      background: rgba($color: #000000, $alpha: .4);
      transition: background .5s;
    }
  }
  &:hover {
    &.img-mask {
      &::after {
        background: rgba($color: #000000, $alpha: 0);
      }
    }
  }
}
.recommend-item + .recommend-item {
  margin-left: 30px;
}
</style>