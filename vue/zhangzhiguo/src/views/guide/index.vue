<template>
  <div class="box">
    <h1>vue demo</h1>
  </div>
</template>

<script>
import { forFootShowMixin } from "@/utils/globalMixin";
export default {
  mixins: [forFootShowMixin],
  mounted() {
    if (localStorage.num) {
      localStorage.num++;
    } else {
      localStorage.num = 0;
    }

    if (localStorage.num > 4) {
      this.$router.push({
        name: "recommend"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>