<template>
  <div class="components-article-item">
    <div class="article-item_tags">
      <slot name="tags"></slot>
    </div>
    <div class="article-item_content">
      <p class="article-item_content-title">一个北安福寺发你看电视</p>
      <div class="article-item_content-imgs">
        <img :src="require(`@/assets/imgs/a-test${index + 1}.png`)" v-for="(item, index) in 2" :key="index"/>
      </div>

      <div class="article-item_content_inner">
        收到了没考虑过地方官马克看了多个老豆腐干考虑非公开饭店烧烤老感觉放大了收到了没考虑过地方官马克看了多个老豆腐干考虑非公开饭店烧烤老感觉放大了
        收到了没考虑过地方官马克看了多个老豆腐干考虑非公开饭店烧烤老感觉放大了收到了没考虑过地方官马克看了多个老豆腐干考虑非公开饭店烧烤老感觉放大了
        收到了没考虑过地方官马克看了多个老豆腐干考虑非公开饭店烧烤老感觉放大了收到了没考虑过地方官马克看了多个老豆腐干考虑非公开饭店烧烤老感觉放大了
        收到了没考虑过地方官马克看了多个老豆腐干考虑非公开饭店烧烤老感觉放大了
      </div>
    </div>

    <div class="article-item_content_info">
      <!--作者-->
      <div>
        <span>
          <img src="" alt="" />
        </span>
        <span>九七</span>
      </div>
      <!--日期-->
      <div>
        <span>2020</span>
      </div>
      <!--观看数-->
      <div>
        <span>
          <b-icon name="blog-guankanyanjing" size="35px"/>
        </span>
        <span>3.6k</span>
      </div>
      <!--评论数-->
      <div>
        <span>
          <b-icon name="blog-pinglun"/>
          <span>2.0k</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-item',
}
</script>

<style lang="scss">
.components-article-item {
  padding: 40px;
  box-sizing: border-box;
  background: #fff;
  .article-item_tags {
    margin-bottom: 35px;
  }
  .article-item_content {
    .article-item_content-title {
      font-size: 25px;
      margin-bottom: 30px;
    }
    .article-item_content-imgs {
      img {
        width: 180px;
        max-height: 135px;
      }
      img + img {
        margin-left: 8px;
      }
    }
    .article-item_content_inner {
      margin-top: 15px;
      line-height: 1.7;
      font-size: 14px;
      color: #566573;
    }
  }
  .article-item_content_info {
    display: flex;
    align-items: center;
  }
}
</style>