<template>
  <div>
    <van-button type="danger"
                @click="logout" 
                class="btn">退出登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // sessionStorage.removeItem('user');
      // localStorage.removeItem('user');
      // localStorage.removeItem('token');
      this.$parent.clearUser();
      this.$router.push({
        name: "sign"
      });
    }
  }
};
</script>

<style lang='scss' scoped>
div{
  width: 70vw;
  height: 50px;
  position: absolute;

  bottom: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.btn{
  width: 70vw;
}
</style>