<template>
  <div class="article-detail-comment">
    <p>没有登录过？
      <span @click="register">立即注册</span>
    </p>
  </div>
</template>

<script>
import registers from '@/components/basic/register'
export default {
  methods: {
    register() {
      this.$popup(registers)
    }
  },
}
</script>
<style lang="scss">
  .article-detail-comment {
    margin-top: 20px;
  }
</style>