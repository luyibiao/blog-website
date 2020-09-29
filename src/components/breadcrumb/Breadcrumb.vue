<template>
  <div class="components-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'breadcrumb',
  props: {
    separator: {
      type: String,
      default: '<'
    },
    separatorClass: {
      type: String,
      default: ''
    },
    customSeparatorClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {
    
  },
}
</script>

<style lang="scss">
.components-breadcrumb {
  // border-left: 3px solid #ec7e30;
  // padding-left: 8px;
  box-sizing: border-box;
  position: relative;
  padding-left: 15px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
    margin-top: 1px;
    background: #63B8FF;
    width: 4px;
  }
}
</style>