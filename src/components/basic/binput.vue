<template>
  <div class="components-input">
    <input 
    type="text" 
    :value="value"
    :placeholder="placeholder"
    @focus="focus"
    @input="$emit('input', $event.target.value)"
    class="components-input_inner"/>
  </div>
</template>

<script>
export default {
  name: 'b-input',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    drag: {
      type: [String, Number],
      default: ''
    },
  },
  methods: {
    focus() {
      this.$emit('focus', this.drag)
    }
  },
}
</script>

<style lang="scss">
  .components-input {
    width: 350px;
    display: inline-block;
    .components-input_inner {
      background: #Fff;
      height: 50px;
      color: #748594;
      border: 1px solid #e2e2e2;
      width: 100%;
      display: inline-block;
      font-size: 15px;
      padding: 0px 20px;
      box-sizing: border-box;
      outline: none;
      border-radius: 4px;
      transition: border-color .3s;
      &:focus {
        border-color: #748594;
      }
    }
  }
</style>