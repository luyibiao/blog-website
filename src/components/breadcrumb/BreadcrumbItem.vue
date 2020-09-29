<template>
  <span class="components-breadcrumb-item">
    <span :class="innerClasses" @click="to && toRoute()">
      <slot></slot>
    </span>
    <template>
      <span class="components-breadcrumb_separator">
        <b-icon name="blog-arrow-right" size="15px"/>
      </span>
    </template>
  </span>
</template>

<script>
export default {
  name: 'breadcrumb-item',
  props: {
    to: {
      type: String,
      default: ''
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: true,
      separator: '',
      separatorClass: '',
      customSeparatorClass: ''
    }
  },
  computed: {
    innerClasses() {
      return [
        'components-breadcrumb_inner',
        this.to && 'components-breadcrumb_inner-link'
      ]
    },
    parentValue () {
      return this.$parent
    },
  },
  mounted() {
    this.separator = this.parentValue.separator
    this.customSeparatorClass = this.parentValue.customSeparatorClass
    this.separatorClass = this.parentValue.separatorClass
  },
  methods: {
    toRoute() {
      const {to, $router} = this
      this.replace ? $router.replace(to) : $router.push(to);
    }
  },
}
</script>

<style lang="scss">
.components-breadcrumb-item {
  .components-breadcrumb_inner {
    font-size: 13px;
    color: #748594;
    &.components-breadcrumb_inner-link {
      cursor: pointer;
      font-weight: bold;
      transition: color .2s;
      color: #748594;
      &:hover {
        color:#63B8FF;
      }
    }
  }
  .components-breadcrumb_separator {
    margin: 0 2px;
    // color: #000;
    font-weight: 600;
  }
  &:last-child {
    .components-breadcrumb_inner {
      // color: #ec7e30;
    }
    .components-breadcrumb_separator {
      display: none;
    }
  }
}
</style>