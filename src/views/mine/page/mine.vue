<template>
  <div class="views-mine">
    <layout-wrap>
      <breadcrumb-basic />
      <!--文章列表-->
      <article-list>
        <div class="views-mine_box">
          <div class="title">关于九七</div>
          <div class="content">
            <p class="inner_wrap">姓名：<span class="inner">陆益标</span></p>
            <p class="inner_wrap">地区：<span class="inner">湖南 (Hu nan)</span></p>
            <p class="inner_wrap">居住地：<span class="inner">Chang Sha</span></p>
            <p class="inner_wrap">职业：<span class="inner">高级web前端开发工程师</span></p>
            <div class="desc" v-html="getMineInfo.content"></div>
          </div>
        </div>
      </article-list>
      <template #right>
        <sideColumnAll />
      </template>
    </layout-wrap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      query: {}
    }
  },
  computed: {
    ...mapGetters(['getMineInfo'])
  },
  created() {
    this.query = this.$route.query
    this.$store.commit('setPareneCode', this.query.code)
  },
}
</script>

<style scoped lang="scss">
.views-mine {
  .views-mine_box {
    background: #fff;
    padding: 80px 40px;
    box-sizing: border-box;
    .title {
      position: relative;
      font-weight: bold;
      font-size: 25px;
      color: #282828;
      padding-bottom: 30px;
      border-bottom: 1px solid #e7e7e7;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100px;
        height: 2px;
        background:#282828;
        pointer-events: none;
        transition: width .3s;
      }
      &:hover::after {
        width: 130px;
      }
    }

    .content {
      padding: 30px 0;
      .inner_wrap {
        font-size: 15px;
        .inner {
          font-weight: bold;
          color: rgb(85, 85, 85);
        }
      }
      .inner_wrap + .inner_wrap {
        margin-top: 20px;
      }

      .desc {
        margin-top: 20px;
        line-height: 1.6;
        font-size: 15px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>