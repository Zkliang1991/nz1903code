<template>
  <div class="chike">
    <Head title="吃客"></Head>
    <div class="sp">
      <ul class="nav">
        <li v-for="(item,i) in menulist" :key="i">
          <a :href="item.sysNo">{{item.name}}</a>
        </li>
      </ul>
      <ul class="content">
        <li v-for="(sp,i) in splist" :key="i">
          <a href>{{sp.name}}</a>
          <ul  class="spp">
            <li   v-for="(sppp,i) in sp.children" :key="i">
              <img :src="sppp.imgUrl" alt />
              <p>{{sppp.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <Foot />
  </div>
</template>
<style lang="scss" scoped>
.sp {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
}
.nav {
  width: 25%;
  overflow-y: scroll;
}
.nav li{
  width: 100%;
  height: 40px;
  font-size: 20px;
  margin: 10px 0;
  line-height: 40px;
}
.content {
  width: 75%;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 15px;
}
.content a{
  display: block;
  width: 100%;
  height: 40px;
  font-size: 20px;
  margin-top: 10px;
}
.spp{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.spp li{
  width: 30%;
  margin: 10px 0;
}
.spp img,p{
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      menulist: [],
      splist: []
    };
  },
  mounted() {
    this.$axios
      .get("/bl/ICategory/AllCategory?_t=1589383649&webId=1&source=2")
      .then(res => {
        console.log(res);
        this.menulist = res.data.data.menu;
        console.log(this.menulist);
        this.splist = res.data.data.allCategory[0].category;
        console.log(this.splist);
      });
  }
};
</script>