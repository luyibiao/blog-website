<template>
  <div class="recommend-item img-mask" @click="go">
    <img-mask :src="item.logo || defaultImg">
      <template #inner>
        <div class="recommend-item_inner-tag">
          <labels :label="item.label" customClasses="reset-tags" />
          <p class="recommend-item_inner-title">{{item.title}}</p>
        </div>
      </template>
    </img-mask>
  </div>
</template>

<script>
export default {
  name: 'recommend-item',
  props: {
    bg: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    styles() {
      return {
        backgroundImage: `url(${this.bg})`
      }
    }
  },
  data() {
    return {
      defaultImg: require('@/assets/imgs/default-logo.jpg')
    }
  },
  methods: {
    go() {
      this.$overall.goArticleDetail(this.item, this.$route.query.code)
    }
  },
}
</script>

<style lang="scss">
.recommend-item {
  position: relative;
  flex: 1;
  height: 220px;
  max-width: 33.3333%;
  cursor: pointer;
 
  .recommend-item_inner-tag {
    // position: absolute;
    // left: 35px;
    // right: 35px;
    // bottom: 30px;
    // z-index: 1000;
  }
  .recommend-item_inner-title {
    color: #fff;
    font-size: 16px;
    // margin-top: 10px ;
    line-height: 1.5;
  }
}
.recommend-item + .recommend-item {
  margin-left: 30px;
}
</style>