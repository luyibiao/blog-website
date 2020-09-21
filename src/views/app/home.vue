<template>
  <div id="home" class="blog-app_home">
    <div class="home-big_box">
      <img src="~@/assets/imgs/home.jpg" alt="" class="home-big_img"/>
    </div>
    <!--头部-->
    <my-header />

    <!--主体内容-->
    <div class="my-router">
      <my-router/>
    </div>
    
    <!--底部-->
    <my-footer />
  </div>
</template>

<script>
import myHeader from './header.vue';
import myRouter from './router';
import myFooter from './footer'
export default {
  name: 'home',
  data(){
    return{
     
    }
  },
  methods: {
  },
  components: {
    myHeader,
    myRouter,
    myFooter
  },
  watch: {
    
  },
}
</script>

<style lang="scss">
.blog-app_home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .home-big_box {
    .home-big_img {
      width: 100%;
      max-height: 200px;
    }
  }
  .my-router {
    flex: 1;
  }
}
</style>
