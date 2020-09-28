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
  margin-top: 10px;
  border: 1px solid #e0e0e0;
  user-select: none;
  color: rgba(0,0,0,.44);
  background: #fff;
  transition: all .3s;
  $types: (
    (bg:#ecf5ff, fc: #409eff, bdc: #d9ecff, type: primary),
    (bg:#f4f4f5, fc: #909399, bdc: #e9e9eb, type: info),
    (bg:#fdf6ec, fc: #e6a23c, bdc: rgba($color: #e6a23c, $alpha: .5), type: warning),
    (bg:#fef0f0, fc: #f56c6c, bdc:  #fde2e2, type: danger),
    (bg:#f0f9eb, fc: #67c23a, bdc:  #e1f3d8, type: success),
  );


  @for $i from 1 through length($types) {
    $item: nth($types, $i);

    &.components-tags_#{map-get($item, type)} {
      @include setBg($bg:map-get($item, bg), $fc:map-get($item, fc)){
        border-color: map-get($item, bdc);
      }
      &.components-tags_clickAble {
        
        &:hover {
          background: map-get($item, fc);
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