<template>
  <div class="components-column-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'column-title'
}
</script>

<style lang="scss">
.components-column-title {
  font-weight: bold;
  font-size: 18px;
  position: relative;
  padding-left: 8px;
  box-sizing: border-box;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 17px;
    background: $main-black;
  }
  // color: #000;
}
</style>