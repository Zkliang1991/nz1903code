<template>
  <div>
    <Carousel class="banner"
              id="b"
              :options="options">
      <CarouselItem v-for="(item, i) in banners"
                    :key="i">
        <img :src="item.imageUrl"
             alt="">
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        // loopedSlides: _this.bannerList.length,
        speed: 1000,
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2000
        },
        observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        pagination: {
          el: ".swiper-pagination"
        }
      },
      banners: []
    };
  },
  mounted() {
    this.$axios
      .get("/yun/banner", {
        params: {
          // limit:5
        }
      })
      .then(res => {
        this.banners = res.data.banners;
      });
  }
};
</script>

<style lang='scss' scoped>
.banner {
  width: 335px;
  height: 20vh;
  margin: 20px;
  overflow: hidden;
  img {
    width: 335px;
    height: 20vh;
  }
}
</style>