<template>
  <div>
    <h1 ref="h1"></h1>
    <ul>
      <li v-for="(item, i) in musicList"
          :key="i" @click="chooseKey">
        <h4>{{item.name}} {{item.alia[0]}} </h4>
        <p>{{item.ar[0].name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playList: {},
      musicList: []
    };
  },
  methods: {
    chooseKey(e) {
      let keyword = e.currentTarget.querySelector("h4").innerHTML;
      this.$router.push({
        name: "detail",
        params: {
          keyword
        }
      });
    }
  },
  computed: {},
  mounted() {
    // this.$axios.get("/yun/toplist").then(res=>{
    //   console.log(res);

    // })
    this.$axios
      .get("/yun/top/list", {
        params: {
          idx: 1
        }
      })
      .then(res => {
        this.playList = res.data.playlist;
        this.musicList = res.data.playlist.tracks;
        this.$refs.h1.style.cssText = `background:url(${this.playList.coverImgUrl}) no-repeat 0px -220px / 750px 750px`;
      });
  }
};
</script>

<style lang='scss' scoped>
div {
  height: 80vh;
  overflow: scroll;
}
h1 {
  width: 100%;
  height: 140px;
  background-size: 50% 50%;
}
ul {
  li {
    padding: 10px 5px;
  }
}
</style>