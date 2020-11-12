<template>
  <div class="components-sideColumnAll">
    <div v-for="(item, index) in columnList" :key="index">
      <component :is="item.name"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideColumnAll',
  props: {
    noShowList: {
      type: Array,
      default: () => []
    },
    pageCode: {
      type: String,
      default: 'HOME'
    }
  },
  data() {
    return {
      columnList: []
    }
  },
  created() {
    // this.columnList = this.$sideColumn[this.$route.name].filter(v => !this.noShowList.includes(v.name))
  },
}
</script>