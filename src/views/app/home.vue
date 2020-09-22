<template>
  <div id="home" class="blog-app_home">
    <!--头部-->
    <my-header />

    <!--主体内容-->
    <div class="my-router">
      <my-router class="my-route-wraper"/>
      <my-silder class="my-silder"/>
    </div>
  </div>
</template>

<script>
import myHeader from './header.vue';
import myRouter from './router';
import mySilder from './silder'
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
    mySilder
  },
  watch: {
    
  },
}
</script>

<style lang="scss" scoped>
.blog-app_home {
  height: 100%;
  .my-router {
    min-height: 100%;
    width: 80%;
    margin: 10px auto 0;
    display: flex;
    .my-route-wraper {
      width: 60%;
    }
    .my-silder {
      flex: 1;
      margin-left: 20px;
    }
    // font-size: ;
  }
}
</style>
