<!--网易云热评-->
<template>
  <div class="components-hot-comments">
    <column-title>网易云热评</column-title>
    <div class="components-hot-comments_content">
      走不通的路就回头，爱而不得的人就放手，得不到回应的热情就适可而止，别把一厢情愿当成满腔孤勇，也别把厌倦当成欲擒故纵。
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot-comments'
}
</script>

<style scoped lang="scss">
.components-hot-comments {
  background: #fff;
  margin-bottom: 20px;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  .components-hot-comments_content {
    margin-top: 20px;
    line-height: 1.6;
    font-size: 15px;
    color: #666;
    // color: #748594;
  }
}
</style>