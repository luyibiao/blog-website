<template>
  <div id="app">
    <my-home></my-home>
  </div>
</template>

<script>
import MyHome from '@/views/app/home';
export default {
  components: {
    MyHome
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/variable.scss';
@import '~@/assets/scss/mixin.scss';
@import '~@/assets/scss/base.scss';

#app{
  position: relative;
  background: $main-white;
  min-width: 1024px !important;
  max-width: 1920px !important;
  padding: 0 5px;
  box-sizing: border-box;
  min-height: 100%;
  margin: 0 auto;
  background: #fff;
  height: 100%;
}
</style>
