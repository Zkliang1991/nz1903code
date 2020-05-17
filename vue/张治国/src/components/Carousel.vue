<template>
  <div class="swiper-container"
       :id="id">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  props: {
    id: String,
    options: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    let mySwiper = null;
    mySwiper = new Swiper("#"+this.id, this.options);
  },
  updated() {
    let mySwiper = null;
    mySwiper = new Swiper("#"+this.id, this.options);
  }
};
</script>

<style lang='scss' scoped>
</style>