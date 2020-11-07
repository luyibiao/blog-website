<template>
  <ui-popup class="components-register" 
  width="100%" 
  :isHeader="false"
  :isFooter="false"
  top="0">
    <div class="components-register-main">
      <div class="components-register-header">
        <span class="components-register-close" @click="close">
          <b-icon name="blog-searchclose" size="30" color="#748594"></b-icon>
        </span>
      </div>
      <div class="components-register-wrap">
        <template v-for="(item, index) in list">
          <div class="register-item" :key="index" :class="[currentIndex === index && 'is-active']">
            <template v-if="item.render">
              <div :key="index" class="register-item">
                <span class="register-item-inner">{{item.label}}</span>
                <contentJsx :column="{...item, index}"/>
              </div>
            </template>
            <template v-else>
              <span class="register-item-inner">{{item.label}}</span>
              <b-input v-model="forms[item.keys]" :placeholder="item.placeholder" :drag="index" @focus="focus"/>
            </template>
          </div>
        </template>
      </div>

      <!--按钮-->
      <div class="save-btn">
        <button class="btn" @click="reject()">取消</button>
        <button class="btn save" @click="save">确定</button>
      </div>
    </div>
  </ui-popup>
</template>

<script>
import contentJsx from '@/components/js/src/content.jsx'
export default {
  data() {
    return {
      forms: {
        // 用户名字
        userName: '',
        // 用户邮箱
        userEmail: '',
        // 验证码
        code: ''
      },
      list: [{
        keys: 'userName',
        placeholder: '请输入昵称',
        label: '你的昵称'
      }, {
        keys: 'userEmail',
        placeholder: '用来接收信息',
        label: '你的邮箱'
      }, {
        keys: 'code',
        placeholder: '请输入验证码',
        label: '验证码',
        render: v => {
          return (
            <div class="ver-code">
              <b-input 
                value={this.forms[v.keys]} 
                placeholder={v.placeholder} 
                drag={v.index}
                on-input={this.codeInput}
                on-appendclick={this.sendCode.bind(this)}
                on-focus={this.focus.bind(this, v.index)}>
                  <template slot='append'>
                    发送验证码
                  </template>
                </b-input>
            </div>
          )
        }
      }],
      currentIndex: -1
    }
  },
  components: {
    contentJsx
  },
  created() {
    console.log(this.$overall)
  },
  methods: {
    close() {
      this.reject()
    },
    focus(v) {
      this.currentIndex = v
    },
    codeInput(val) {
      this.forms.code = val
    },
    // 发送验证码
    sendCode() {
      this.$api.sendCode({
        userEmail: this.forms.userEmail,
        userName: this.forms.userName
      }).then(_ => {
        this.$message.success('验证码已发送到邮箱')
      })
    },
    save() {
      this.$api.checkBlogLogin(this.forms).then(res => {

      })
    }
  },
}
</script>

<style lang="scss">
  .components-register {
    .components-dialog_main {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 0;
      .components-register-main {
        overflow: hidden;
        .components-register-header {
          // position: relative;
          .components-register-close {
            position: absolute;
            right: 12%;
            top: 9%;
            cursor: pointer;
            transition: transform .3s;
            &:hover {
              transform: rotate(360deg);
            }
          }
        }

        .components-register-wrap {
          width: 440px;
          margin: 14% auto 0;
          .register-item {
            margin-bottom: 30px;
            .register-item-inner {
              margin-right: 10px;
              color: #748594;
              display: inline-block;
              width: 80px;
              transition: transform .3s;
            }
            .ver-code {
              display: inline-block;
              width: 350px;
            }
            &.is-active {
             .register-item-inner {
                transform: scale(1.2);
              }
            }
          }
        }

        .save-btn {
          text-align: right;
          width: 440px;
          margin: 20px auto;
          .btn {
            outline: none;
            background: #fff;
            border: 1px solid#748594;
            color:  #748594;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 15px;
            font-size: 15px;
            user-select: none;
            transition: all .3s;
            &:hover {
              opacity: .8;
            }
          }
          .save {
            background: #2e2d38;
            color: #fff;
          }
        }
      }
    }
  }
</style>