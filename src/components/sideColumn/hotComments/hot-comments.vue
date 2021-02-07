<!--网易云热评-->
<template>
  <transition name="blog-fadein" appear>
    <div class="components-hot-comments">
      <column-title>网易云热评</column-title>
      <div class="components-hot-comments_content">
        {{getCurrentMusicInfo.content}}
        <p class="author">
          <span class="line"></span>
          {{getCurrentMusicInfo.name}}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hot-comments',
  computed: {
    ...mapGetters(['getCurrentMusicInfo'])
  },
}
</script>

<style scoped lang="scss">
.components-hot-comments {
  background: #fff;
  margin-bottom: 20px;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  box-shadow: 0 5px 8px 0 #07111b1a;
  .components-hot-comments_content {
    margin-top: 20px;
    line-height: 1.6;
    font-size: 14px;
    color: #666;
    letter-spacing: 1px;
    .author {
      display: flex;
      align-items: center;
      color: #333;
      font-weight: bold;
      justify-content: flex-end;
      margin-top: 10px;
    }
    .line {
      flex-basis: 50px;
      height: 1px;
      background: #333;
    }
    // color: #748594;
  }
}
</style>