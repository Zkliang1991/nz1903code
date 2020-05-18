<template>
  <div class="foot"
       v-show="show">
    <h3>{{player.name}}</h3>
    <p class="v_my">
      <span>{{time}}</span>
      <input type="range"
             ref="range"
             value="0">
      <span>{{timeAll}}</span>
    </p>
    <a href="javascript:;"
       @click="play"
       class="iconfont play">
      {{ player.play ? '&#xe6ad;' : '&#xe615;'}}
    </a>
    <audio :src="player.src"
           ref="au" />
  </div>
</template>

<script>
import bus from "@/utils/bus";
import { forPlayer } from "@/store/modelMixins";

export default {
  mixins: [forPlayer],
  data() {
    return {
      // show this component is or no
      show: true,
      time: "--:--",
      timeAll: "--:--"
    };
  },
  methods: {
    action() {
      // music start
      this.$refs.au.play();
    },
    stop() {
      // music stop
      this.$refs.au.pause();
    },
    formatTime(val) {
      let s = parseInt(val % 60);
      let m = parseInt(val / 60);
      s = s < 10 ? "0" + s : "" + s;

      return "" + m + " : " + s;
    }
  },
  mounted() {
    bus.$on("footshow", val => {
      // response show
      this.show = val;
    });

    let _that = this;
    let au = this.$refs.au;
    let range = this.$refs.range;
    let time1 = 0;
    let time2 = 100;

    range.style.cssText = `background-size: 0% 100%;`
    range.value = 0;
    au.addEventListener("canplay", function() {
      // monitor load over
      _that.player.ready = true;
      _that.gitPlayer ? _that.action() : _that.stop();
      time2 = au.duration;
      _that.timeAll = _that.formatTime(time2);
    });
    au.addEventListener("timeupdate", function() {
      time1 = au.currentTime;
      _that.time = _that.formatTime(time1);
      range.value = time1 / time2 * 100;
      range.style.cssText = `background-size: ${range.value}% 100%;`
    });
  },
  updated() {

  },
  computed: {
    gitPlayer: {
      // 只监听一个属性，避免多次响应改变
      get(val) {
        return this.player.play;
      }
    }
  },
  watch: {
    gitPlayer(val) {
      if (this.player.ready) {
        val ? this.action() : this.stop();
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.foot {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 20;
  height: 12vh;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgb(97, 97, 97); /* no*/
  h3 {
    font: 18px/20px "黑体" 500;
  }
  .play {
    font-size: 30px;
  }
  /* 自定义进度条样式 */
  .v-my {
    padding: 0 20px;
  }
  .v_my input[type="range"] {
    -webkit-appearance: none; /*清除系统默认样式*/
    width: 70vw;
    margin: 10px;
    background: -webkit-linear-gradient(rgb(225, 248, 14), #ddd) no-repeat, #ddd; /*设置左边颜色为#61bd12，右边颜色为#ddd*/
    background-size: 0% 100%; /*设置左右宽度比例*/
    height: 0.1rem; /*横条的高度*/
    border-radius: 0.1rem;
  }
  /*拖动块的样式*/
  .v_my input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /*清除系统默认样式*/
    height: 0.3rem; /*拖动块高度*/
    width: 0.3rem; /*拖动块宽度*/
    background: rgb(0, 0, 0); /*拖动块背景*/
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 1px #ddd; /*设置边框*/
  }
}
</style>