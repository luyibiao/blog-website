<template>
  <div id="home" class="blog-app_home">
    <!--头部-->
    <my-header />

    <!--主体内容-->
    <div class="my-router">
      <my-router class="my-route-wraper"/>
    </div>

    <footers />
  </div>
</template>

<script>
import myHeader from './header.vue';
import myRouter from './router';
import footers from './footer'

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
    footers
  },
  watch: {
    
  },
}
</script>

<style lang="scss">
.blog-app_home {
  min-height: 100%;
  
  .my-router {
    width: 1200px;
    margin: 10px auto 0;
    padding-bottom: 120px;
    .my-route-wraper {
      display: block;
      width: 100%;
    }
  }
}
</style>
