<template>

  <van-tab title="登录">
    <van-form @submit="loginSubmit">
      <van-field v-model="login.mobile"
                 name="mobile"
                 label="手机号"
                 placeholder="手机号"
                 :rules="[{ required: true, message: '请填写手机号码' }]" />
      <van-field v-model="login.password"
                 type="password"
                 name="password"
                 label="密码"
                 placeholder="密码"
                 :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </van-tab>

</template>

<script>
import {forUser} from '@/store/modelMixins'
export default {
  mixins:[forUser],
  data() {
    return {
      login: {
        mobile: localStorage.mobile
      }
    };
  },
  methods: {
    loginSubmit() {
      this.$axios.post("/vue/login",this.login).then(res=>{
        if(res.data.type == 1){
          this.setUser(res.data.data);
          localStorage.token = res.data.token;
          this.$router.push({name:"recommend"})
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>

</style>