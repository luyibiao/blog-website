<template>
  <div class="components-comment">
    <div class="components-comment-inner">
      <div 
      contenteditable 
      class="textarea text-wrap" 
      placeholder="来说几句吧....." 
      ref="inner" 
      @blur="blur"
      ></div>
    </div>

    <!--验证码-->
    <div class="components-comment-code">
      <div class="emoji">
        <emojy @change="changeEmojy"/>
      </div>
      <div class="img-code">
        <span class="img-code-txt">验证码</span>
        <span>
          <b-input class="img-code-input" placeholder="验证码" v-model="codeText"/>
        </span>
        <imgCode />
      </div>
      <div class="components-comment-btn" @click="submit">
        发表评论
      </div>
    </div>
  </div>
</template>

<script>
import emojy from '@/components/basic/emojy'
import imgCode from '@/components/basic/imgCode'
import storage from '@/utils/storage'
export default {
  name: 'b-comment',
  components: {
    emojy,
    imgCode
  },
  data() {
    return {
      iconConfig: {
        placement: 'left',
        size: '30px',
      },
      range: null,
      codeText: ''
    }
  },

  created() {
    
  },
  
  methods: {
    blur() {
      var range;//记录光标位置对象
      var node = window.getSelection().anchorNode;
      // 这里判断是做是否有光标判断，因为弹出框默认是没有的
      if(node != null){
          range = window.getSelection().getRangeAt(0);// 获取光标起始位置
      }else{
      　　range = undefined;
      }
      this.range = range
      
    },
    changeEmojy(img) {
      if (this.range) {
        this.range && this.range.insertNode(img);// 在光标位置插入该对象
      }
    },

    submit() {
      let txt = storage.getCache('codeText', sessionStorage)
      let codeText = this.codeText ? this.codeText.toLowerCase() : ''
      if (txt !== codeText) {
        this.$message.error('验证码错误')
      }
      storage.removeCache('codeText', sessionStorage)
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
      .textarea {
        flex-grow: 1;
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
          width: 25px;
          vertical-align: middle;
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

    .components-comment-code {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .img-code {
        color: #2e2d38;
        display: flex;
        align-items: center;
        .img-code-txt {
          font-weight: bold;
          margin-right: 5px;
        }
        .img-code-input {
          width: 120px;
          .components-input_inner {
            height: 35px;
          }
        } 
      }
      .components-comment-btn {
        background: #15B6E6;
        color: #fff;
        cursor: pointer;
        font-size: 15px;
        border-radius: 5px;
        padding: 8px 15px;
        // align-self: flex-start;
      }
    }
  }
</style>