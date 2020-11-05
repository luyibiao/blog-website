<template>
  <transition
    @before-leave="beforeLeave"
    @afterLeave="afterLeave"
    @after-enter="afterEnter"
    :name="`components-dialog-${animation}`"
    appear>
    <div 
      ref="dialog"
      class="components-dialog" 
      v-show="value" 
      @click.self="closeOnClickOverlay && handClose($event)" 
      :style="componentsDialogStyles" 
      role="dialog" >
      <div class="components-dialog_main" :style="boxStyles">
        <!-- <div class="components-dialog_close" @click="handClose" v-if="isCloseIcon">
          <components-icon name="close" size="18" color="#999"></components-icon>
        </div> -->
        <div class="components-dialog_header" :class="headerClasses" v-if="isHeader">
          <div class="components-dialog_header-inner"><slot name="title">{{title}}</slot></div>
        </div>
        <div class="components-dialog_content">
          <slot></slot>
        </div>
        <div class="components-dialog_footer" :class="footerClasses" v-if="isFooter">
          <slot name="footer"></slot>
          <div class="components-dialog_button">
            <slot name="button">
              <div v-if="confirm || cancel">
                <components-button type="text" v-if="cancel" @click="onCancel">{{cancelText}}</components-button>
                <components-button type="primary" v-if="confirm" @click="confirm">{{confirmText}}</components-button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const getPx = (val) => {
  if (String(val).includes('%') || String(val).includes('px')) return val
  return `${val}px`
}
export default {
  name: 'components-dialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    top: {
      type: [String, Number],
      default: 120
    },
    animation: {
      type: String,
      default: 'fade'
    },
    width: {
      type: [Number, String],
      default: '30%'
    },
    closeOnClickOverlay: {
      typeZ: Boolean,
      default: true
    },
    isCloseIcon: {
      type: Boolean,
      default: true
    },
    isHeaderBd: {
      type: Boolean,
      default: true
    },
    isFooterBd: {
      type: Boolean,
      default: true
    },
    isHeader: {
      type: Boolean,
      default: true
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    confirm: null,
    cancel: null,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    isCloseEsc: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: null
  },
  computed: {
    componentsDialogStyles () {
      return {
        zIndex: this.zIndex
      }
    },
    boxStyles () {
      return {
        width: getPx(this.width),
        marginTop: getPx(this.top)
      }
    },
    headerClasses () {
      return [
        this.isHeaderBd && 'components-message_header-bd'
      ]
    },
    footerClasses () {
      return [
        this.isFooterBd && 'components-message_footer-bd'
      ]
    }
  },
  watch: {
    value (val) {
      if (val) {
        this.vals()
      } else {
        
        document.removeEventListener('keydown', this.keydown)
        this.$emit('close')
      }
    }
  },
  mounted () {
    this.isCloseEsc && this.bindEvent()
    if (this.appendToBody) {
      document.querySelector('body').appendChild(this.$el)
    }
    if (this.value) {
      this.vals()
    }
  },
  data () {
    return {
      zIndex: 1001,
    }
  },
  methods: {
    bindEvent() {
      document.addEventListener('keydown', this.keydown)
    },
    vals() {
      this.$mask()
      this.$emit('open')
    },
    handClose (e) {
      if (this.beforeClose) {
        this.beforeClose(() => {
          this.$emit('input', false)
        })
      } else {
        this.$emit('input', false)
      }
    },
    keydown (e) {
      if (e.keyCode === 27) {
        this.$emit('input', false)
      }
    },
    onCancel () {
      if (this.beforeClose) {
        this.beforeClose(() => {
          this.$emit('input', false)
          this.cancel()
        })
      } else {
        this.$emit('input', false)
        this.cancel()
      }
    },
    beforeLeave (el, done) {
      this.mask.toggleMask()
    },
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="scss">
@mixin setPosition ($position: center, $top: 0, $right: 0, $bottom: 0, $left: 0, $position-box: absolute) {
  position: $position-box;
  @if $position == center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @else if $position == x-center {
    top: $top;
    left: 50%;
    transform: translateX(-50%);
  }
  @else if $position == y-center {
    top: 50%;
    transform: translateY(-50%);
  }
  @else if $position == inherit {
    top: $top;
    left: $left;
    bottom: $bottom;
    right: $right;
  }
  @else if $position == left {
    top: $top;
    left: $left;
  }
  @else if $position == right {
    top: $top;
    right: $right;
  }
  @else if $position == custom {
    @content;
  }
  @content;
}
.components-dialog {
  @include setPosition(inherit, $position-box: fixed);
  &_main {
    box-sizing: border-box;
    position: relative;
    background-color: #fff;
    margin: 0 auto 0;
    border-radius: 8px;
    .components-dialog_close {
      @include setPosition(right, 14px, 16px);
      cursor: pointer;
    }
    .components-dialog_header {
      padding: 14px 16px;
      &-inner {
        font-weight: 700;
        font-size: 15px;
        color: #303133;
      }
      &.components-message_header-bd {
        border-bottom: 1px solid #DCDFE6;
      }
    }
    .components-dialog_content {
      padding: 14px 16px;
      font-size: 14px;
      color: #303133;
    }
    .components-dialog_footer {
      padding: 14px 16px;
      &.components-message_footer-bd {
        border-top: 1px solid #DCDFE6;
      }
      & .components-dialog_button {
        text-align: right;
      }
    }
  }
  //淡入淡出
  &-fade-enter, &-fade-leave-to {
    opacity: 0;
  }
  &-fade-enter-active, &-fade-leave-active {
    transition: all .3s;
  }

  // 上方滑入
  &-upper-slide-enter, &-upper-slide-leave-to {
    margin-top: -100%;
  }
  &-upper-slide-enter-active, &-upper-slide-leave-active {
    transition: all .3s;
  }

  // 下方滑入
  &-below-slide-enter, &-below-slide-leave-to {
    margin-top: 100%;
  }
  &-below-slide-enter-active, &-below-slide-leave-active {
    transition: all .3s;
  }

  // 左边滑入
  &-left-slide-enter, &-left-slide-leave-to {
    left: -100%;
  }
  &-left-slide-enter-active, &-left-slide-leave-active {
    transition: all .2s;
  }

  // 右边滑入
  &-right-slide-enter, &-right-slide-leave-to {
    left: 100%;
  }
  &-right-slide-enter-active, &-right-slide-leave-active {
    transition: all .2s;
  }
}
</style>
