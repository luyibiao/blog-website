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
      <div class="article-item_content_info-item">
        <span >
          <b-icon name="blog-touxiang" size="25px"/>
        </span>
        <span class="info-item-_inner">九七</span>
      </div>
      <!--日期-->
      <div class="article-item_content_info-item">
        <span>
          <b-icon name="blog-riqi" size="15px" class="article-item_content_info-icon"/>
        </span>
        <span class="info-item-_inner">2020</span>
      </div>
      <!--观看数-->
      <div class="article-item_content_info-item">
        <span>
          <b-icon name="blog-guankanyanjing" size="22px"/>
        </span>
        <span class="info-item-_inner">3.6k</span>
      </div>
      <!--评论数-->
      <div class="article-item_content_info-item">
        <span>
          <b-icon name="blog-pinglun1" size="15px" />
          <span class="info-item-_inner">2.0k</span>
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
    margin-top: 20px;
    font-size: 12px;
    color: #748594;
    .article-item_content_info-item {
      display: flex;
      align-items: center;
      margin-right: 25px;
      .info-item-_inner {
        margin-left: 3px;
      }
      .article-item_content_info-icon {
        vertical-align: middle;
        // margin-right: 5px;
      }
    }
  }
}

.components-article-item + .components-article-item {
  margin-top: 25px;
}
</style>