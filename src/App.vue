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
import { mapGetters } from 'vuex'

export default {
  components: {
    MyHome, 
  },
  computed: {
    ...mapGetters(['getCurrentTitle'])
  },
  watch: {
    getCurrentTitle() {
      document.title = this.getCurrentTitle ? this.getCurrentTitle + '-九七个人博客' : '九七个人博客'
    }
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
    window.addEventListener('scroll', function() {
      console.log(565656  )
    })
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/variable.scss';
@import '~@/assets/scss/mixin.scss';
@import '~@/assets/scss/base.scss';

html {
  overflow: hidden;
}
html, body {
  height: 100%;
  // overflow-y: auto;
}
#app{
  position: relative;
  // background: $main-white;
  padding: 0 5px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
  color: $main-black;
  overflow-y: auto;
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
