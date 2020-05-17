<template>
  <div class='box'>
    <Head-other title="个人中心"
                :left="true" />
    <div class="center">
      <Avatar class="pic" />
      <Logout />
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
import Logout from "./Logout";
import { forUser } from "@/store/modelMixins";
import { forFootShowMixin } from "@/utils/globalMixin";
export default {
  mixins: [forUser, forFootShowMixin],
  components: {
    Avatar,
    Logout
  }
};
</script>

<style lang='scss' scoped>
.center {
  padding: 20px;
}
</style>