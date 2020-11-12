<template>
  <div class="components-emojy">
    <span ref="button" 
    :class="[show && 'is-active']"
    class="components-emojy-icon" 
    @click="open">
      <b-icon name="blog-biaoqing" size="27"></b-icon>
    </span>
    <transition name="picker-emoji" appear>
      <div ref="picker" class="picker-emoji" v-show="show">
        <VEmojiPicker @select="selectEmoji" />
      </div>
    </transition>
  </div>
</template>

<script>
import Popper from 'v-poppers'
export default {
  components: {
  },
  data() {
    return {
      iconConfig: {
        placement: 'bottom',
        size: '30px',
      },
      show: false,
      s: null,
      options: {
        isAppendParentNode: true,
        offset: {
          y: 10
        }
      }
    }
  },
  mounted() {
    this.s = new Popper(this.$refs.picker, this.$refs.button, this.options)
  },
  beforeDestroy() {
    this.s.destroy()
  },
  methods: {
    open() {
      this.show = !this.show
      if (this.show ) {
        this.$nextTick(_ => {
          this.s.show()
        })
      }
    },
    
    selectEmoji(val) {
      this.$emit('change', val)
      this.show = false
      // let str = val
      // // 匹配图片（g表示匹配所有结果i表示区分大小写）
      // let imgReg = /<img.*?(?:>|\/>)/gi
      // // 匹配src属性
      // let nameReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      // let arr = str.match(imgReg)
      // // console.log('所有已成功匹配图片的数组：' + arr)
      // for (let i = 0; i < arr.length; i++) {
      //   // console.log(arr[i])
      //   let names = arr[i].match(nameReg)
      //   // 获取图片地址
      //   if (names && names[1]) {
      //     // console.log('已匹配的图片地址' + (i + 1) + '：' + names[1])
      //     str = str.replace(arr[i], names[1])
      //   }
      // }

      // const s = str.split(' ')[0].replace('./static', '')
      // const image = new Image()
      
      // image.src = require('@/assets' + s)
      // this.$emit('change', image, {urlAfter: s, urlBefroe: val})
    }
  },
}
</script>

<style lang="scss">
.components-emojy {
  .components-emojy-icon {
    cursor: pointer;
    &.is-active {
      color:  #409eff;
    }
  }
}
.picker-emoji {
    z-index: 10;
    transform-origin: left top;
    &-enter-active, &-leave-active {
      transition-property: transform, opacity;
      transition-duration: .2s;
    }
    &-enter, &-leave-to {
      transform: scaleY(0.5);
      opacity: 0;
    }
  }
</style>