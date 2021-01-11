<template>
  <div class="home-app-footer">
    <span class="home-app-footer-content" @click="go">
      湘ICP备2020020943号-1
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      window.open('https://beian.miit.gov.cn/#/Integrated/index', '_blank')
    }
  },
}
</script>

<style lang="scss">
  .home-app-footer {
    text-align: center;
    padding-bottom: 30px ;
    .home-app-footer-content {
      color: #999aaa;
      font-size: 14px;
      cursor: pointer;
    }
  }
</style>