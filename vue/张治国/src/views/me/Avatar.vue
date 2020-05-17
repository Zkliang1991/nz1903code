<template>
  <div>
    <input type="file"
           v-show="false"
           ref="loadImg"
           name="avatar"
           @change="changePic">
    <img :src="pic"
         alt="用户头像"
         @click="handleClick"
         class="avatar">
    <button @click="upLoadPic">点击更改头像</button>
  </div>
</template>

<script>
import defaultImg from "@/assets/logo.png";
import { baseURL } from "@/utils/axios";
export default {
  data() {
    return {
      pic: defaultImg
    };
  },
  mounted() {
    if (localStorage.user) {
      let lo = JSON.parse(localStorage.user);
      this.pic = lo.avatar;
    } else {
      this.getPic();
    }
  },
  methods: {
    handleClick() {
      // 点击图片触发 input
      this.$refs.loadImg.click();
    },
    upLoadPic() {
      // 上传头像
      let file = this.$refs.loadImg.files[0];
      let data = new FormData();
      data.append("avatar", file);
      this.$axios({
        url: "/vue/uploadimg",
        method: "POST",
        data
      }).then(res => {
        this.$parent.setAvatar(res.data.path);
      });
    },
    changePic() {
      // 本地预览头像
      let file = this.$refs.loadImg.files[0];
      let that = this;
      let fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = function(e) {
        that.pic = e.target.result;
      };
    },
    getPic() {
      this.$axios.get("/vue/getavatar").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
div{
  padding:0 0 10px 10px;
}
.avatar {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>