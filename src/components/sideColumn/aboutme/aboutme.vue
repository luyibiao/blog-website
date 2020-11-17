<!--关于我-->
<template>
  <div class="components-aboutme">
    <column-title>关于我</column-title>
    <div class="components-aboutme_content">
      <div class="bg">
        <img :src="info.avatar" alt="" />
      </div>
      <div style="height: 0">
        <div class="header-img">
          <img :src="info.avatar" alt="" />
        </div>
      </div>
      <div class="components-aboutme_content-info">
        <div class="inner">
          {{info.profile}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutme',
  data() {
    return {
      info: {},
      isRequest: false
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      if (this.isRequest) return
      this.$api.queryMineInfo().then(res => {
        this.info = res
        this.$store.commit('setMineInfo', this.info)
        this.isRequest = true
      })
    }
  },
}
</script>

<style scoped lang="scss">
.components-aboutme {
  background: #fff;
  margin-bottom: 20px;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  .components-aboutme_content {
    margin-top: 20px;
    .bg {
      overflow: hidden;
      img {
        width: 100%;
        height: 97px;
        -webkit-filter: blur(4px);
        filter: blur(4px);
      }
    }
  }

  .header-img {
    left: 50%;
    transform: translateY( -50%);
    margin: 0 auto;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    // margin: 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
  .components-aboutme_content-info {
    margin-top: 38px;
    position: relative;
    .inner {
      // margin-top: 20px;
      line-height: 1.6;
    }
  }
}
</style>