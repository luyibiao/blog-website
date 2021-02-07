<template>
  <transition appear name="components-article-item">
    <div class="components-article-item">
      <div class="article-item_tags" v-if="$slots.tags">
        <slot name="tags"></slot>
      </div>
      <div class="article-item_content">
        <p class="article-item_content-title">
          <slot name="title">{{item.title}}</slot>
        </p>
        <div class="article-item_content-imgs" v-if="imgs && imgs.length">
          <span v-html="i" v-for="(i, c) in imgs" :key="c" class="article-item_content-imgs-span"></span>
          <!-- <img :src="require(`@/assets/imgs/a-test${index + 1}.png`)" v-for="(item, index) in 2" :key="index"/> -->
        </div>

        <div class="article-item_content_inner">
          {{item.contentdesc}}
        </div>
      </div>

      <div class="article-item_content_info">
        <!--作者-->
        <div class="article-item_content_info-item">
          <span >
            <b-icon name="blog-touxiang" size="25px"/>
          </span>
          <span class="info-item-_inner">{{item.author}}</span>
        </div>
        <!--日期-->
        <div class="article-item_content_info-item">
          <span>
            <b-icon name="blog-riqi" size="15px" class="article-item_content_info-icon"/>
          </span>
          <span class="info-item-_inner">
            {{item.create_time | formatDatetime('yyyy-MM-dd')}}
          </span>
        </div>
        <!--观看数-->
        <div class="article-item_content_info-item">
          <span>
            <b-icon name="blog-guankanyanjing" size="22px"/>
          </span>
          <span class="info-item-_inner">{{item.watch_num}}</span>
        </div>
        <!--评论数-->
        <div class="article-item_content_info-item">
          <span>
            <b-icon name="blog-pinglun1" size="15px" />
            <span class="info-item-_inner">{{count}}</span>
          </span>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
export default {
  name: 'article-item',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imgs: [],
      count: 0
    }
  },
  created() {
    this.getImgs()
    this.getCommontEnts()
    // this.imgs = 
  },
  methods: {
    getImgs() {
      var str = decodeURIComponent(this.item.content)
      var imgReg = /<img.*?(?:>|\/>)/gi;
      var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      var arr = str.match(imgReg) || [];  // arr 为包含所有img标签的数组
      if (this.item.logo) {
        arr.unshift(
          `<img src=${this.item.logo} />`
        )
      }
      if (arr.length <= 5) {
        this.imgs = arr
      } else {
        this.imgs = arr.slice(0 ,5)
      }
    },
    getCommontEnts() {
      this.$api.queryCommonetCount({
        id: this.item.id
      }).then(res => {
        this.count = res.count
      })
    }
  },
}
</script>

<style lang="scss">
.components-article-item {
  padding: 40px;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
  .article-item_tags {
    margin-bottom: 20px;
  }
  .article-item_content {
    .article-item_content-title {
      font-size: 22px;
      margin-bottom: 25px;
    }
    .article-item_content-imgs {
      img {
        width: 100px;
        height: 70px;
      }
      .article-item_content-imgs-span + .article-item_content-imgs-span {
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
  &-enter-active, &-leave-active {
    transition: all 1s;
  }
  &-enter, &-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.components-article-item + .components-article-item {
  margin-top: 25px;
}
</style>