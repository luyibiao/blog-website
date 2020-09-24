<template>
  <div class="home">
    <layout-wrap>
      <template>
        <div class="home-wrap">
          <b-swiper>
            <b-swiper-item v-for="(item, index) in 3" :key="index">
              <img src="~@/assets/imgs/ban1.png" alt="" style="width: 100%"/>
            </b-swiper-item>
          </b-swiper>
        </div>
      </template>
      
      <template #right>
        <hot-article />
      </template>
    </layout-wrap>

    <!--推荐-->
    <recommend-list style="margin-top: 35px;">
      <recommend-item 
      v-for="(item, index) in 3" 
      :key="index" 
      :bg="recommendPng"
      >
      </recommend-item>
    </recommend-list>

    <layout-wrap class="home-content">
      <template>
        <!--文章列表-->
        <article-list>
          <article-item>
            <template #tags>
              <tag v-for="(item, index) in 5" :key="index">生活</tag>
            </template>
          </article-item>
        </article-list>
      </template>
    </layout-wrap>

  </div>
</template>

<script>
import recommendPng from '@/assets/imgs/recommend.jpg'
export default {
  data() {
    return {
      recommendPng
    }
  },
}
</script>

<style lang="scss">
.home {
  .home-wrap {
    .swiper-container {
      height: 420px;
    }
  }
  .home-content {
    margin-top: 35px;
  }
}
</style>