<template>
  <div id="home" class="blog-app_home">
    <!--头部-->
    <my-header v-if="this.dest  === 'Pc'"/>

    <!--主体内容-->
    <div class="my-router" :class="myRouterClasses">
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
      dest: 'Pc'
    }
  },
  created() {
    this.detectDeviceType()
  },
  mounted() {},
  computed: {
    myRouterClasses() {
      return [
        this.dest === 'Mobile' && 'is-Mobile-Router'
      ]
    }
  },
  methods: {
    detectDeviceType() {
      this.dest = this.$overall.detectDeviceType()
      this.$store.commit('setDetectDeviceType', this.dest)
    }
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
  height: 100%;
  display: flex;
  flex-direction: column;
  .my-router {
    width: 1200px;
    margin: 10px auto 0;
    padding-bottom: 120px;
    flex: 1;
    // overflow: auto;
    &.is-Mobile-Router {
      width: 100%;
      margin-top: 0;
    }
    .my-route-wraper {
      display: block;
      width: 100%;
    }
  }
}

@media only screen and (max-width: 1500px) {
    .my-router {
      width: 1100px  !important;
    }
}

@media only screen and (max-width: 1200px) {
    .my-router {
      width: 1000px  !important;
    }
}
@media only screen and (max-width: 1000px) {
    .my-router {
      width: 800px  !important;
    }
}
</style>
