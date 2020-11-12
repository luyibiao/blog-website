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
        <imgCode />
      </div>
      <div class="components-comment-btn" @click="submit">
        发表评论
      </div>
    </div>

    <!--评论列表-->
    <div class="components-comment-content">
      <div class="content-title">评论列表</div>
      <div class="components-comment-list">
        <div class="components-comment-item" v-for="(item, index) in 5" :key="index">
          <div class="header-circle"></div>
          <div class="components-comment-item-inner">
            <p class="title">好家伙</p>
            <p class="detail">愿你归来是少年愿你归来是少年愿你归来是少年愿你归来是少年愿你归来是少年愿你归来是少年愿你归来是少年愿你归来是少年</p>
            <p class="time">2020-11-03 14:50</p>
          </div>
        </div>
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
      codeText: '',
      inputText: '',
      detail: ''
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
      let txt = storage.getCache('codeText', sessionStorage)
      let codeText = this.codeText ? this.codeText.toLowerCase() : ''
      console.log(this.detail)
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
        user-select: none;
        &:hover {
          opacity: .8;
        }
        // align-self: flex-start;
      }
    }
    
    .components-comment-content {
      margin-top: 70px;
      .content-title {
        border-bottom: 1px solid #e7e7e7;
        padding: 10px 0;
        color:  #2e2d38;
        font-weight: 500;
        font-size: 16px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          display: block;
          width: 70px;
          height: 2px;
          background:  #2e2d38;
          bottom: 0;
        }
      }

      .components-comment-list {
        margin-top: 10px;
        .components-comment-item {
          display: flex;
          align-items: flex-start;
          padding: 15px 0;
          .header-circle {
            width: 70px;
            height: 70px;
            border-radius: 100%;
            background: #15B6E6;
            line-height: 60px;
            text-align: center;
            
          }

          .components-comment-item-inner {
            flex: 1;
            margin-left: 15px;
            .title {
              color: #3cbf4c;
              font-size: 18px;
              margin-bottom: 8px;
            }
            .detail {
              font-size: 15px;
              color:  #333;
              line-height: 1.5;
            }
            .time {
              // margin-top: -3px;
              font-size: 13px;
              color: #888;
            }
          }
        }

        .components-comment-item + .components-comment-item {
          border-top: 1px solid  #e7e7e7;
        }
      }
    }
  }
</style>