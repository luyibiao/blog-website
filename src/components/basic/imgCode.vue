<template>
  <span v-html="code.img" class="img-cod-inner" @click="sendimgcode"></span>
</template>

<script>
import storage from '@/utils/storage'
import unicode from '@/utils/unicode'
export default {
  data() {
    return {
      code: {},
      isFinish: true
    }
  },
  created() {
    this.sendimgcode()
  },
  methods: {
    sendimgcode() {
      if (!this.isFinish) return
      this.isFinish = false
      this.$api.sendimgcode().then(res => {
        this.code = res
        this.isFinish = true
        const txt = unicode.stringDecode(this.code.text)
        storage.setCache('codeText', txt, {type: sessionStorage, isunicode: true})
      }).catch(e => {
        this.isFinish = true
      })
    },
  },
}
</script>

<style lang="scss">
  .img-cod-inner {
    cursor: pointer;
    svg {
      width: 120px;
    }
  }
</style>