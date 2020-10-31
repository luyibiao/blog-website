<template>
  <div class="components-labels">
    <slot></slot>
    <tag 
    :class="classes"
    v-for="(item, index) in $overall.getLabels(label)" 
    :key="index">
      {{item.label}}
    </tag>
  </div>
</template>

<script>
export default {
  name: 'labels',
  props: {
    label: {
      type: String,
      default: ''
    },
    customClasses: String
  },
  computed: {
    classes() {
      return [
        this.customClasses
      ]
    }
  }
}
</script>