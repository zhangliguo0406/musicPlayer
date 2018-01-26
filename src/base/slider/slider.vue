<template>
    <div class="slider">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,key) in slider" :key="key">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  props:['slider'],
  data() {
    return {
      swiperOption: {
          notNextTick: true,
          autoplay: true,
          delay:2000,
          loop: true,
          /*effect : 'cube',
          type: 'bullets'*/
        },
      pagination:{
        el: '.swiper-pagination',
        type: 'bullets'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {}
}
</script>

<style lang="less" scoped>
img{
  width: 100%;
  height: 100%;
}
</style>
