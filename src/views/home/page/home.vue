<template>
  <div class="home">
    <layout-wrap>
      <template>
        <div class="home-wrap">
          <b-swiper>
            <b-swiper-item v-for="(item, index) in bannerList" :key="index">
              <div class="home-wrap-swiper">
                <img :src="item.imgUrl" alt="" style="width: 100%"/>
                <!--本地文章跳转显示标题标签-->
                <template v-if="item.type == 1">
                  <div class="home-wrap-swiper_info">
                    <div>
                      <labels :label="item.label" customClasses="reset-tags">
                      <tag class="reset-tags">推荐</tag>
                      </labels>
                    </div>
                    <h2 class="title">{{item.article_title}}</h2>
                  </div>
                </template>
              </div>
            </b-swiper-item>
          </b-swiper>
        </div>
      </template>
      
      <template #right>
        <hot-article />
      </template>
    </layout-wrap>

    <!--推荐-->
    <recommend-list style="margin-top: 25px;">
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
        <b-article />
        <!-- <article-list>
          <article-item v-for="(item, index) in 3 " :key="index">
            <template #tags>
              <tag v-for="(item, index) in 5" :key="index"
                :type="arr[index]"
              >生活</tag>
            </template>
          </article-item>
        </article-list> -->
      </template>
      <template #right>
        <sideColumnAll 
        :noShowList="['hot-article']"/>
      </template>
    </layout-wrap>

  </div>
</template>

<script>
import recommendPng from '@/assets/imgs/recommend.jpg'
export default {
  data() {
    return {
      recommendPng,
      columnList: [],
      arr: [
        'primary',
        'warning',
        'info',
        'danger',
        'success'
      ],
      bannerList: []
    }
  },
  created() {
    this.getBannerList()
  },
  methods: {
    getBannerList() {
      this.$api.queryBaner().then(res => {
        this.bannerList = res.list
      })
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
    .home-wrap-swiper {
      position: relative;
      height: 100%;
      pointer-events: none;
      .home-wrap-swiper_info {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        padding: 10px 20px 20px ;
        background: rgba($color: #000000, $alpha: .1);
        .title {
          color: #fff;
          // font-weight: bold;
          font-size: 25px;
          line-height: 1.3;
        }
      }
    }
  }
  .home-content {
    // margin-top: 35px;
  }
}
</style>