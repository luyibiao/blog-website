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
            <div class="desc">
              人生就是得与失的过程，而我，却在短短的一年内得到了太多，友情、爱情、知识，最重要的是懂得了如何做人，如何去面对职场。

没有钱、没有经验、没有阅历、没有社会关系，这些都不可怕。没有钱，可以通过辛勤劳动去赚；没有经验，可以通过实践操作去总结；没有阅历，可以一步一步去积累；没有社会关系，可以一点一点去编织。但是，没有梦想、没有思路才是最可怕的，才让人感到恐惧，很想逃避！周而复始，恶性循环！

什么是梦想？每天都冒出很多念头，那些不死的才叫做梦想。抽出时间去学习，凡事从小做起，不怕单调和重复，长期的积累坚持，想不成功，也难。

理想是什么？它不是口上说的计划，也不是敷衍的借口，它是自己的心，理想的最终汇集地，是幸福，为了自己有了理想，为了恋人有了理想，为了家人
            </div>
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
export default {
  data() {
    return {
      query: {}
    }
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