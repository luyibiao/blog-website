<template>
  <div class="components-tags" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tag',
  props: {
    type: {
      // primary, info, warning, danger, success
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'mini'
    },
    isClickAble: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        `components-tags_${this.type}`,
        `components-tags_${this.size}`,
        this.isClickAble && `components-tags_clickAble`
      ]
    }
  },
}
</script>

<style lang="scss">
.components-tags {
  display: inline-block;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  user-select: none;
  color: rgba(0,0,0,.44);
  background: #fff;
  transition: all .3s;
  $types: (
    (bg:#19B5FE, fc: #fff, bdc: #d9ecff, type: primary),
    (bg:#4A4A4A, fc: #fff, bdc: #e9e9eb, type: info),
    (bg:#ffbb50, fc: #fff, bdc: rgba($color: #e6a23c, $alpha: .5), type: warning),
    (bg:#ff5e5c, fc: #fff, bdc:  #fde2e2, type: danger),
    (bg:#1ac756, fc: #fff, bdc:  #e1f3d8, type: success),
  );


  @for $i from 1 through length($types) {
    $item: nth($types, $i);

    &.components-tags_#{map-get($item, type)} {
      @include setBg($bg:map-get($item, bg), $fc:map-get($item, fc)){
        // border-color: map-get($item, bdc);
        border-color: transparent;
      }
      &.components-tags_clickAble {
        
        &:hover {
          background: rgba($color: map-get($item, bg), $alpha: .8);
          color: #fff;
        }
      }
    }
  }

  $sizes: (
    (p: 6px 10px, fc: 14px, type: mini),
    (p: 10px 14px, fc: 15px, type: small),
  );
  
  @for $i from 1 through length($sizes) {
    $item: nth($sizes, $i);

    &.components-tags_#{map-get($item, type)} {
      padding: map-get($item, p );
      font-size: map-get($item, fc );
    }
  }
  

  &.components-tags_clickAble {
    cursor: pointer;
    &:hover {
      background: #2e2d38;
      color: #fff;
    }
  }
}
</style>