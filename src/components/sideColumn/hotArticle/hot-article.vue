<!--热门文章-->
<template>
  <div class="hot-article">
    <p class="hot-article-title">热门文章</p>
    <div class="hot-article-list">
      <div>
        <b-swiper 
        :isShowPag="false"
        :isShowBtn="false"
        :options="swiperOption">
          <b-swiper-item v-for="(item, index) in 3" :key="index">
            <img src="~@/assets/imgs/ban1.png" alt="" style="width: 100%"/>
          </b-swiper-item>
        </b-swiper>
      </div>

      <div class="hot-article-info_list">
        <div class="hot-article-info_item" v-for="(item, index) in 3" :key="index">
          <span class="hot-article-info_inner">
            比较完整的SEO方案
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot-article',
  data() {
    return {
      swiperOption: {
        speed: 1200,
        direction : 'vertical',
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      }
    }
  },
}
</script>

<style lang="scss">
.hot-article {
  border: 1px solid $main-white;
  border-top: 2px solid $main-black;
  box-shadow: 0 2px 5px 0 rgba(146,146,146,.1);
  overflow: hidden;
  height: 420px;
  display: flex;
  flex-direction: column;
  background: #fff;
  // margin-bottom: 20px;
  .hot-article-title {
    text-align: center;
    padding: 23px 0;
    font-size: 20px;
    color: #000;
  }
  // max-height: 227px;
  .swiper-container {
    height: 205px;
  }
  .hot-article-list {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex: 1;
    img {
      width: 100%;
    }
    .hot-article-info_list {
      margin-top: 1px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .hot-article-info_item {
        // padding: 20px 0;
        cursor: pointer;
        font-size: 15px;
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        transition: all .3s;
        user-select: none;
        .hot-article-info_inner {
          top: 50%;
        }
        &:hover {
          background: #2e2d38;
          color: #fff;
        }
      }
    }
  }
}
</style>