//components/Icon-svg
<template>
  <svg class="svg-icon" aria-hidden="true" :style="styles">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'b-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#${this.name}`
    },
    styles() {
      return {
        color: this.color,
        fontSize: this.size
      }
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 20px;
}
</style>
