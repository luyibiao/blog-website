<!--图片-->
<template>
  <div class="components-img-wrap ">
    <div class="components-img-mask_wrap">
      <img 
      :src="src" 
      class="components-img-mask"/>
    </div>
    <div class="components-img-wrap_inner" v-if="$slots.inner">
      <slot name="inner"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-mask',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.components-img-wrap {
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  .components-img-mask_wrap {
    height: 100%;
    width: 100%;
    .components-img-mask {
      display: block;
      width: 100%;
      height: 100%;
      max-height: 100%;
    } 
  }
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
    pointer-events: none;
  }
  &:hover {   
    &::after {
      background: rgba($color: #000000, $alpha: 0);
    }
  }
  .components-img-wrap_inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
}
</style>