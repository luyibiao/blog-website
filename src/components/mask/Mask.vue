<template>
  <transition name="components-mask" appear>
    <div class="components-mask" v-if="show" @click="toggleMask" :style="styles"></div>
  </transition>
</template>

<script>
export default {
  name: 'components-mask',
  data () {
    return {
      show: false,
      zIndex: 999,
      count: 0
    }
  },
  computed: {
    styles () {
      return {
        zIndex: this.zIndex,
        toggle: null
      }
    }
  },
  watch: {
    show (val) {
      this.toggle && this.toggle(val)
      // !val && (this.$VIELEMENT.mask = null)
    }
  },
  methods: {
    toggleMask () {
      this.show = false
    }
  }
}
</script>

<style lang="scss">
.components-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .5;
  z-index: 1000;
  &-enter-active, &-leave-active {
    transition: all .3s;
  }
  &-enter, &-leave-to {
    opacity: 0;
  }
}

</style>
