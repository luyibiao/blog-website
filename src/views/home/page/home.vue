<template>
  <div class="home">
    <div class="banner-swipe">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop : true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      }
    }
  },
}
</script>

<style scoped lang="scss">
.home {
  .swiper-slide {
    background: red;
    height: 300px;
  }
}
</style>