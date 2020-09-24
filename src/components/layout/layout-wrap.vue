<template>
  <div class="blog-layout-wrap">
    <div class="blog-layout-wrap_left">
      <slot></slot>
    </div>
    <div class="blog-layout-wrap_right">
      <slot name="right"></slot>
    </div>
    <slot name="all"></slot>
  </div>
</template>

<script>
export default {
  name: 'layout-wrap'
}
</script>

<style lang="scss">
.blog-layout-wrap {
  display: flex;
  .blog-layout-wrap_left {
    width: 65%;
  }
  .blog-layout-wrap_right {
    flex: 1;
    margin-left: 35px;
    overflow: hidden;
  }
}
</style>