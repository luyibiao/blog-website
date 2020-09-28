<!--关于我-->
<template>
  <div class="components-aboutme">
    <column-title>关于我</column-title>
    <div class="components-aboutme_content">
      <div class="bg">
        <img src="http://www.gold404.cn/static/index/images/bg2.png" alt="" />
      </div>
      <div class="components-aboutme_content-info">
        <div class="header-img">
          <img src="http://www.gold404.cn/static/index/images/avatar.jpg" alt="" />
        </div>
        <div class="inner">
          一个95后程序员，17年入行，一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutme'
}
</script>

<style scoped lang="scss">
.components-aboutme {
  margin-top: 20px;
  background: #fff;
  margin-top: 20px;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  .components-aboutme_content {
    margin-top: 20px;
    .bg {
      img {
        width: 100%  ;
      }
    }
  }

  .components-aboutme_content-info {
    margin-top: -35px;
    .header-img {
      margin: 0 auto;
      width: 70px;
      height: 70px;
      border-radius: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    .inner {
      margin-top: 20px;
      line-height: 1.6;
    }
  }
}
</style>