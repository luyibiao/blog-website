<template>
  <swiper-slide class="components-swiper-item">
    <slot></slot>
  </swiper-slide>
</template>

<script>
export default {
  name: 'b-swiper-item'
}
</script>

<style lang="scss">
.components-swiper-item {
  img {
    max-height: 100%;
    display: block;
  }
}
</style>