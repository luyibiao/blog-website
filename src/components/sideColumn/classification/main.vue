<template>
  <div class="components-classification">
    <column-title>文章分类</column-title>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'classification',
  created() {
    this.getList()
  },
  methods: {
    getList() {

    }
  },
}
</script>

<style lang="scss">
  .components-classification {
    background: #fff;
    margin-bottom: 20px;
    padding: $fs-30 $fs-20x;
    box-sizing: border-box;
  }
</style>