<template>
  <div class="home">
    <layout-wrap class="home-blog-wrap-content">
      <template>
        <transition name="blog-fadein" appear>
          <div class="home-wrap">
            <el-carousel height="380px">
              <el-carousel-item v-for="(item, index) in bannerList"  :key="index" @click.native="toRoute(item)">
                <div class="home-wrap-swiper">
                  <img :src="item.imgUrl" alt="" style="width: 100%;height: 100%;"/>
                  <!--本地文章跳转显示标题标签-->
                  <template v-if="item.type == 1">
                    <div class="home-wrap-swiper_info">
                      <div>
                        <labels :label="item.label" customClasses="reset-tags">
                        </labels>
                      </div>
                      <h2 class="title">{{item.article_title}}</h2>
                    </div>
                  </template>
                </div>
              </el-carousel-item>
            </el-carousel>
          
          </div>
        </transition>
      </template>
      
      <template #right>
        <div>
          <transition name="blog-fadein" appear>
            <el-carousel height="380px" direction="vertical" :interval="5000">
              <el-carousel-item v-for="(item, index) in silderList"  :key="index" >
                <component :is="item"></component>
              </el-carousel-item>
            </el-carousel>
          </transition>
        </div>
        <!-- <hot-article /> -->
      </template>
    </layout-wrap>

    <layout-wrap class="home-content">
      <template>
        <!--文章列表-->
        <b-article />
      </template>
      <template #right>
        <sideColumnAll 
        :noShowList="['hot-article']"/>
      </template>
    </layout-wrap>

  </div>
</template>

<script>

export default {
  data() {
    return {
      silderList: ['hot-article', 'recommend-hoticle'],
      columnList: [],
      arr: [
        'primary',
        'warning',
        'info',
        'danger',
        'success'
      ],
      bannerList: [],
      recommendList: []
    }
  },
  created() {
    this.getBannerList()
    this.$store.commit('setPareneCode', 'HOME')
    this.$store.commit('setCurrentTitle', '首页')

    
  },
  methods: {
    getBannerList() {
      this.$api.queryBaner().then(res => {
        this.bannerList = res.list
      })
    },
    // 获取推荐列表
    getrRecommendList() {
      this.$api.getArticleList({
        pageSize: 3,
        pageIndex: 0,
        recommend: 1,
        timeType: 'update_time'
      }).then(res => {
        this.recommendList = res.list
      })
    },
    toRoute(item) {
      if (item.type == 1) {
        this.$overall.goArticleDetail(item, this.$route.query.code)
      } else {
        window.open(item.url, '_blank')
      }
    }
  },
}
</script>

<style lang="scss">
.home {
  .home-blog-wrap-content {
    margin-top: 8px;
  }
  .home-wrap {
    .swiper-container {
      height: 380px;
    }
    .el-carousel__item {
      cursor: pointer;
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
  .home-recommend {
    &-enter-active, &-leave-active {
      transition: all 1s;
    }
    &-enter, &-leave-to {
      transform: rotateY(180deg);
      opacity: 0;
    }
  }
}

</style>