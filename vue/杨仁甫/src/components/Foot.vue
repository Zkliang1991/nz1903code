<template>
  <footer>
    <div v-for="(foot,i) in foots" :key="i">
      <router-link :to="{name:foot.name}">
        <i class="iconfont" v-html="foot.icon"></i>
        <span>{{foot.txt }}</span>
      </router-link>
    </div>
  </footer>
</template>//*
<script>
import { foots } from "@/utils";
export default {
  watch: {
    $route(to) {
      to.name === "cart" ? (this.color = "orange") : (this.color = "#999");
    }
  },
  data() {
    return {
      foots,
      color: this.$route.name == "cart" ? "orange" : "#999"
    };
  }
};
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 45px;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex !important;
  z-index: 100;
  border-top: 1px solid black;
  div {
    flex: 1;
    height: 45px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 3px 0;
      text-align: center;
      font-family: "微软雅黑";
      color: #999;
      position: relative;
      i {
        width: 100%;
        height: 23px;
        line-height: 23px;
        font-size: 22px !important;
      }
      span {
        width: 100%;
        height: 19px;
        line-height: 19px;
        font-size: 14px;
      }
    }
    .nav-active,
    .router-link-exact-active,
    .router-link-active {
      color: orange;
      border-color: orange;
    }
  }
}
</style>