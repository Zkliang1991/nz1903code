<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="单曲">
        <ul class="single">
          <li v-for="(item, i) in songs"
              :key="i"
              :musicId="item.id"
              @click="chooseSong">
            <h3 class="overhidden">
              {{item.name}}
              {{item.alias[0] ? ' ('+item.alias[0]+') ' : ""}}
            </h3>
            <p class="overhidden">
              <span>{{item.artists[0].name}}</span> - {{item.album.name}}
            </p>
            <p class="overhidden">
              {{item.alias[0]}}
            </p>
            <a href="javascript:;"
               class="iconfont">
               <i>{{player.musicId == item.id? '播放中' : ''}}</i>
               &#xe630;
            </a>
          </li>
        </ul>
      </van-tab>
      <van-tab title="歌单">内容 2</van-tab>
      <van-tab title="歌手">内容 4</van-tab>
      <van-tab title="视频">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { forPlayer } from "@/store/modelMixins";
export default {
  mixins: [forPlayer],
  data() {
    return {
      active: 0,
      keyword: "",
      type: 1,
      songs: []
    };
  },
  methods: {
    chooseSong(e) {
      // 获取点击的歌曲id，跳转到播放页，或者直接播放
      let musicId = e.currentTarget.getAttribute("musicId");
      let name = e.currentTarget.querySelectorAll("h3")[0].innerHTML + " -- ";
      name += e.currentTarget.querySelectorAll("span")[0].innerHTML;
      // console.log(e.target.className);
      if (e.target.className == "iconfont") {
        // 如果是a标签则直接播放
        if (musicId != this.player.musicId) {
          this.setSong({
            musicId,
            name,
            autoplay: true
          });
        } else {
          this.play();
        }
      } else {
        if (musicId != this.player.musicId) {
          this.setSong({
            musicId,
            name,
            autoplay: false
          });
        }
        this.$router.push({
          name: "player"
        });
      }
    },
    searchkeyword() {
      // 接收设置关键词，然后搜索关键词，返回歌曲信息数组，自动渲染
      this.keyword = this.$route.params.keyword;
      this.$axios
        .get("/yun/search", {
          params: {
            keywords: this.keyword,
            limit: 20,
            type: this.type
          }
        })
        .then(res => {
          this.songs = res.data.result.songs;
        });
    }
  },
  mounted() {
    this.searchkeyword();
  },
  watch: {
    $route: {
      handler() {
        this.searchkeyword();
      },
      deep: true
    },
    active(val) {
      switch (val) {
        case 1:
          console.log(1);
          break;
        case 2:
          console.log(2);
          break;
        default:
          console.log(0);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.single {
  height: 85vh;
  padding: 0 25px;
  overflow: scroll;
  li {
    padding: 10px 40px 0 0;
    font-size: 14px;
    position: relative;
    h3 {
      color: rgb(54, 95, 148);
    }
    p {
      font-size: 12px;
      line-height: 14px;
      color: rgb(112, 111, 111);
    }
    a {
      position: absolute;
      top: 10px;
      right: 0;
      color: cadetblue;
      &:active {
        color: #f31717;
      }
      i{
        font-size: 12px;
        color: rgb(4, 255, 180);
      }
    }
  }
}
</style>