<template>
  <div id="router" class="router">
      <router-view :key="$route.fullPath"/>   
  </div>
</template>

<script>


export default {
  name: 'router',
  created(){
    
  },
  mounted() {
    
    
  },
  methods: {

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
