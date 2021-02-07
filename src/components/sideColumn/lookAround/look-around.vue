<!--随便看看-->
<template>
  <transition name="blog-fadein" appear>
    <div class="look-around">
      <column-title>随便看看</column-title>
      <div class="look-around_wrap">
        <div class="look-around_wrap-top" @click="go(instance)">
          <img-mask :src="instance.logo || defaultImg">
            <template #inner>
              <div class="look-around_wrap-top_inner">
                <div class="date">{{instance.create_time | formatDatetime('yyyy-MM-dd')}}</div>
                <div class="title">{{instance.title}}</div>
              </div>
            </template>
          </img-mask>
        </div>
        <div class="look-around_list">
          <div class="look-around_item" v-for="(item, index) in list" :key="index" @click="go(item)">
            <div class="look-around_item_img">
              <img :src="item.logo || defaultImg"/>
            </div>
            <div class="look-around_item-inner">
              <p class="title">{{item.title}}</p>
              <p class="date">{{item.create_time | formatDatetime('yyyy-MM-dd')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'look-around',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      list: [],
      instance: {},
      defaultImg: require('@/assets/imgs/default-logo.jpg')
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$api.queryRandowArticle().then(res => {
        this.instance = res.list[0] || {}
        this.list = res.list.slice(1) || []
      })
    },
    go(item) {
      this.$overall.goArticleDetail(item, this.$route.query.code)
    }
  },
}
</script>

<style lang="scss">
.look-around {
  background: #fff;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  margin-bottom: 20px;
  box-shadow: 0 5px 8px 0 #07111b1a;
  .look-around_wrap {
    margin-top: 30px;
    .look-around_wrap-top {
      position: relative;
      height: 213px;
      .look-around_wrap-top_inner {
        .date {
          font-size: 12px;
          margin-bottom: 8px;
        }
      }
    }
  }

  .look-around_list {
    margin-top: 15px;
    .look-around_item {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        .look-around_item-inner {
          opacity: .8;
        }
      }
      .look-around_item_img {
        width: 100px;
        img {
          width: 100%;
          height: 75px;
        }
      }
      .look-around_item-inner {
        flex: 1;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        .title {
          font-size: 15px;
          margin-bottom: 20px;
          @include ellipsis-multi(1);
        }
        .date {
          font-size: 12px;
        }
        margin-left: 15px;
      }
    }
    .look-around_item + .look-around_item {
      margin-top: 15px;
    }
  }
}
</style>