<template>
  <div class='box'>
    <HeadOther :title="$route.params.title"
               :left="true"></HeadOther>
    <h1>未开发</h1>
    <button @click="action">开始</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script>
import bus from "@/utils/bus";
export default {
  data() {
    return {
      musicId: "",
      src: ""
    };
  },

  methods: {
    action() {

    },
    stop() {

    },
    seturl() {

    }
  },
  mounted() {

  },
  watch: {

  }
};
</script>

<style lang='scss' scoped>
.au {
  width: 300px;
}
</style>