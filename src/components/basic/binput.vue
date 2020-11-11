<template>
  <div class="components-input" :class="classes">
    <input 
    type="text" 
    :value="value"
    :placeholder="placeholder"
    @focus="focus"
    @input="$emit('input', $event.target.value)"
    class="components-input_inner"/>
    <template v-if="$slots.append">
      <div 
          class="append-btn" 
          :class="appendClass"
          @click="isAppendBtnClick ? $emit('appendclick') : null">
        <slot name="append"></slot>
      </div>
    </template>
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
      default: ''
    },
    drag: {
      type: [String, Number],
      default: ''
    },
    isAppendBtnClick: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return [
        this.$slots.append && 'components-input-append',
      ]
    },
    appendClass() {
      return [
        this.isAppendBtnClick && 'is-append'
      ]
    }
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
    display: inline-table;
    .components-input_inner {
      background: #Fff;
      height: 50px;
      color: #748594;
      border: 1px solid #e2e2e2;
      width: 100%;
      display: table-cell;
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

    &.components-input-append {
      .components-input_inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    .append-btn {
      display: table-cell;
      height: 100%;
      padding: 0px 15px;
      box-sizing: border-box;
      background: #2e2d38;
      color: #fff;
      text-align: center;
      user-select: none;
      &:hover {
        opacity: .8;
      }
      &.is-append {
        cursor: pointer;
      }
    }
  }
</style>