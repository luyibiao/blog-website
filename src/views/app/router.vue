<template>
  <div id="router" class="router">
    <router-view :key="$route.fullPath"/>   
  </div>
</template>

<script>


export default {
  name: 'router',
  created(){
    this.getDetail()
  },
  mounted() {
    
    
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
  components: {
    
  }
}
</script>

<style lang="scss">
.router{
  #btn{
    margin: 20px;
    padding: 10px;
  }
}
</style>
