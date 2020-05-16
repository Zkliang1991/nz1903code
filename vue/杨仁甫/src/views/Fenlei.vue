<template>
  <div>
    <Head title="分类"></Head>
    <div class="nava">
      <van-sidebar v-if="titlelist.length>0" v-model="activeKey">
        <van-sidebar-item v-for="(item,i) in titlelist" :key="i" :title="item.name" />
      </van-sidebar>
    </div>

    <ul class="nav" v-if="shoplist.length>0">
      <li v-for="(iteme,i) in shoplist" :key="i">
        <a href>
          <img :src="iteme.imgUrl" alt />
          <p>{{iteme.name}}</p>
        </a>
      </li>
    </ul>
    <Foot />
  </div>
</template>

<style lang="scss" scoped>
.nava {
  float: left;
  width: 20%;
}
.nav {
  width: 80%;
  float: right;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: scroll;
  overflow-x: hidden;
}
.nav li {
  width: 30%;
  padding-top: 20px;
}
.nav li img {
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      titlelist: [],
      shoplist: []
    };
  },
  methods: {
    onchange() {}
  },
  mounted() {
    this.$axios
      .get("/bl/ICategory/AllCategory?_t=1589267098&webId=1&source=2", {
        headers: {
          "X-Host": "api.benlai.com"
        }
      })
      .then(res => {
        console.log(res);
        this.titlelist = res.data.data.menu;
        console.log(this.titlelist);
        this.shoplist = res.data.data.allCategory[0].category[0].children;
        console.log(this.shoplist);
      });
  }
};
</script>