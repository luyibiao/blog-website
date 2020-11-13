<template>
  <div class="blog-layout-wrap" :class="classes">
    <div class="blog-layout-wrap_left">
      <slot></slot>
    </div>
    <div class="blog-layout-wrap_right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <!-- <slot name="all"></slot> -->
  </div>
</template>

<script>
export default {
  name: 'layout-wrap',
  props: {
    isExitColumn: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return [
        !this.isExitColumn && 'no-sideColumn'
      ]
    }
  },
}
</script>

<style lang="scss">
.blog-layout-wrap {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  .blog-layout-wrap_left {
    width: 68%;
  }
  .blog-layout-wrap_right {
    flex: 1;
    margin-left: 25px;
    overflow: hidden;
  }
  &.no-sideColumn {
    .blog-layout-wrap_left {
      width: 100%;
    }
  }
}
</style>