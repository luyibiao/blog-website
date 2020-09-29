<template>
  <div id="app">
    <my-home class="app-home"></my-home>
    <div class="particles" ref="particles">
      <vue-particles
        color="#dedede"
        :particleOpacity=".8"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi" />
    </div>
  </div>
</template>

<script>
import MyHome from '@/views/app/home';

export default {
  components: {
    MyHome, 
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息 
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
        sessionStorage.removeItem('store')
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    });
  },
  mounted() {
    document.getElementsByTagName('body')[0].appendChild(this.$refs.particles)
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/variable.scss';
@import '~@/assets/scss/mixin.scss';
@import '~@/assets/scss/base.scss';

#app{
  position: relative;
  // background: $main-white;
  padding: 0 5px;
  box-sizing: border-box;
  min-height: 100%;
  margin: 0 auto;
  height: 100%;
  color: $main-black;
  // background: rgba($color: $main-white, $alpha: .5);
  .app-home {
  
  }
}
.particles {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: $main-white, $alpha: .8);
  // background-image: linear-gradient(to right, #7A88FF, #7AFFAF);
  z-index: -2;
  #particles-js {
    height: 100%;
  }
}
</style>
