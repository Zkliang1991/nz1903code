<template>
  <div class="box">
    <img :src="url" alt="">
    <a href="/main" class="ignore"> 跳过>> </a>
  </div>
</template>

<script>
import { forFootShowMixin } from "@/utils/globalMixin";
const pic = require('@/../public/img/img1.jpg');

export default {
  mixins: [forFootShowMixin],
  data(){
    return {
      url: pic
    }
  },
  mounted() {
    if (localStorage.num) {
      localStorage.num++;
    } else {
      localStorage.num = 0;
    }

    if (localStorage.num > 4) {
      this.$router.push({
        name: "main"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  img{
    width: 100vw;
    height: 100vh;
  }
  .ignore{
    position: absolute;
    bottom: 20px;
    right: 10px;
    font-size: 20px;
    color: aqua;
  }
</style>