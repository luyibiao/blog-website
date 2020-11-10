<template>
  <div class="components-comment">
    <div class="components-comment-inner">
      <div contenteditable class="textarea text-wrap" placeholder="来说几句吧....." ref="inner" @click="click"></div>
      <div class="emoji">
        <emoji-icon :iconConfig="iconConfig" @select="selectEmoji"></emoji-icon>
      </div>
    </div>

    <!--验证码-->
    <div class="">
      <!-- <img :src="bb " alt=""> -->
    </div>
    <div ref="nn"></div>
  </div>
</template>

<script>

export default {
  name: 'b-comment',
  
  data() {
    return {
      iconConfig: {
        placement: 'top',
        size: '30px',
      },
      bb: '',
      opt: ''
    }
  },
  methods: {
    click(e) {
      console.log(e)
    },
    selectEmoji(val) {
      const inner  = this.$refs.inner.innerHTML
      this.$refs.nn.innerHTML = val
      this.$nextTick(_ => {
        const a = this.$refs.nn.querySelector('img').src
        this.bb = require('@/assets' + a.split('/static')[1])
        const img = document.createElement('img')
        img.src = require('@/assets' + a.split('/static')[1])
        this.$refs.inner.appendChild(img)
      })
      // const aa = val.replace('./static', '@/assets')
      // this.bb = aa
    }
  },
}
</script>

<style lang="scss">
  .components-comment {
    .components-comment-inner {
      display: flex;
      width: 100%;
      align-items: center;
      .emoji {
        // padding-left: 15px;
        // margin-left: 20px;
      }
      .textarea {
        flex-grow: 1;
        margin-right: 15px;
        border: 1px solid #dcdfe6;
        outline: none;
        padding: 5px 15px;
        box-sizing: border-box;
        border-radius: 4px;
        height: 100px;
        overflow-y: auto;
        transition: all .3s;
        color: #2e2d38;
        font-size: 15px;
        img {
          width: 30px;
        }
        &:focus {
          border-color: #409eff;
        }
        &:focus:before{
          content:none;
        }
        &:empty:before{
          content: attr(placeholder);   /* element attribute*/
          color:#909399;
          font-size: 15px;
        }
      }
    }
  }
</style>