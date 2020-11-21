<template>
  <div class="components-comment">
    <div class="components-comment-inner">
      <el-input 
      type="textarea" 
      placeholder="来说几句吧....."
      v-model="inputText" 
      :autosize="{ minRows: 3, maxRows: 3}"
      :maxlength="300"
      show-word-limit
      style="font-size: 15px;"
      ref="emojiInput"></el-input>
      <!-- <div 
      contenteditable 
      class="textarea text-wrap" 
      placeholder="来说几句吧....." 
      ref="inner" 
      @blur="blur"
      ></div> -->
    </div>

    <!--验证码-->
    <div class="components-comment-code">
      <!-- <div class="emoji">
        <VEmojiPicker @select="selectEmoji" />
        <emojy @change="changeEmojy"/>
      </div> -->
      <div class="img-code">
        <span class="img-code-txt">验证码</span>
        <span>
          <b-input class="img-code-input" placeholder="验证码" v-model="codeText"/>
        </span>
        <imgCode ref="imgCode"/>
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
import registers from '@/components/basic/register'
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
      codeText: '',
      inputText: '',
      detail: '',
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
    changeEmojy(emoji) {
      var elInput = this.$refs.emojiInput.$el.querySelector('.el-textarea__inner')//获取输入框元素
      // console.log(elInput);
      var start = elInput.selectionStart // 记录光标开始的位置
      var end = elInput.selectionEnd // 记录选中的字符 最后的字符的位置
      if (start === undefined || end === undefined) return
      var txt = elInput.value
      // 将表情添加到选中的光标位置
      var result = txt.substring(0, start) + emoji.data + txt.substring(end)
      this.detail = txt.substring(0, start) + encodeURIComponent(emoji.data) + txt.substring(end)
      elInput.value = result // 赋值给input的value
      // 重置光标位置
      elInput.focus()
      elInput.selectionStart = start + emoji.data.length
      elInput.selectionEnd = start + emoji.data.length
      this.inputText= result
      
    },

    
    submit() {
      const userInstance = storage.getCache('userInfo')
      if (!userInstance || !userInstance.id) {
        this.$popup(registers)
        return
      }
      let txt = storage.getCache('codeText', sessionStorage)
      let codeText = this.codeText ? this.codeText.toLowerCase() : ''
      if (txt !== codeText) {
        this.$message.error('验证码错误')
        return
      }
      storage.removeCache('codeText', sessionStorage)
      this.$emit('submit', {
        users: userInstance,
        content: this.inputText
      })
      this.$refs.imgCode.sendimgcode()
    },
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
        user-select: none;
        &:hover {
          opacity: .8;
        }
        // align-self: flex-start;
      }
    }
  }
</style>