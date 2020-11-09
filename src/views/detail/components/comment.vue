<template>
  <div class="article-detail-comment">
    <column-title class="title">评论一下</column-title>
    <div class="is-login">
      <p>没有登录过？
        <span @click="register" class="register-btn">立即登录</span>
      </p>
    </div>
  </div>
</template>

<script>
import registers from '@/components/basic/register'
import storage from '@/utils/storage'
export default {
  created() {
    console.log(storage.getCache('userInfo'))
  },
  methods: {
    register() {
      this.$popup(registers)
    }
  },
}
</script>
<style lang="scss">
  .article-detail-comment {
    background: #fff;
    margin-top: 20px;
    padding: 40px 40px 50px;
    .title {
      font-size: 20px;
    }
    .components-column-title {
      &::before {
        height: 20px;
      }
    }
    .is-login {
      margin-top: 40px;
      // font-weight: bold;
      color: #363636;
      .register-btn {
        cursor: pointer;
        color: #63B8FF;
        transition: color .2s;
        &:hover {
          color: #748594;
        }
        // font-weight: bold;
      }
    }
  }
</style>