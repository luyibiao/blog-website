<template>
  <div>
    留言
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {}
    }
  },
  created() {
    this.query = this.$route.query
    this.$store.commit('setPareneCode', this.query.code)
  },
}
</script>