<template>
  <div class="components-swipe-wraper">
    <swiper 
      class="components-swipe"
      :options="{...swiperOption, ...options}">
        <slot></slot>
        <template v-if="isShowBtn">
          <button class="swiper-button-prev swiper-btn" slot="button-prev">
            <b-icon name="blog-arrow-left"/>
          </button>
          <button class="swiper-button-next swiper-btn" slot="button-next">
            <b-icon name="blog-arrow-right"/>
          </button>
        </template>
        <template v-if="isShowPag">
          <div class="swiper-pagination" slot="pagination"></div>
        </template>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'b-swiper',
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    isShowBtn: {
      type: Boolean,
      default: true
    },
    isShowPag: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperOption: {
        speed: 2000,
        grabCursor : true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop : true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination :{
          el: '.swiper-pagination',
          clickable :true,
          // type: 'custom'
        }
      }
    }
  },
}
</script>

<style  lang="scss">
.components-swipe-wraper {
  .components-swipe {
    .swiper-btn {
      outline: none;
      background-image: none;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: rgba(0, 0, 0, .25);
      border: none;
      color: #fff;
      transition: all .3s;
      opacity: 0;
      &.swiper-button-prev {
        left: 0;
      }
      &.swiper-button-next {
        right: 0;
      }
      &:hover {
        background: rgba(0, 0, 0, .4);
      }
      &.swiper-button-prev::after {
        content: '';
      }
      &.swiper-button-next::after {
        content: '';
      }
    }
    .swiper-pagination {
      cursor: pointer;
      .swiper-pagination-bullet {
        border-radius: 0;
        width: 28px;
        height: 3px;
        background: #fff;
        transition: all .3s;
        &.swiper-pagination-bullet-active {
          width: 32px;
        }
      }
    }
  }
  &:hover {
    .swiper-btn {
      opacity: 1;
      &.swiper-button-prev {
        left: 10px;
      }
      &.swiper-button-next {
        right: 10px;
      }
    }
  }
}

</style>