<template>
  <div class="recommend-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'recommend-list'
}
</script>

<style lang="scss">
.recommend-list {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>