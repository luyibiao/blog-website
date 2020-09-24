<template>
  <div class="components-tags">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tag'
}
</script>

<style lang="scss">
.components-tags {
  display: inline-block;
  padding: 6px 10px;
  font-size: 14px;
  border: 1px solid rgba($color: #e6a23c, $alpha: .5);
  cursor: pointer;
  color: #e6a23c;
  background-color: #fdf6ec;
  border-radius: 4px;
}
.components-tags + .components-tags {
  margin-left: 5px;
}
</style>