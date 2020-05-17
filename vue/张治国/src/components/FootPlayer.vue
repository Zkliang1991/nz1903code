<template>
  <div class="foot"
       v-show="show">
    <h3>{{player.name}}</h3>
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
  methods: {
    action() {
      if (this.player.ready) {
        this.$refs.au.play();
      }
    },
    stop() {
      this.$refs.au.pause();
    }
  },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    bus.$on("footshow", val => {
      this.show = val;
    });
  },
  updated() {
    bus.$on("footshow", val => {
      this.show = val;
    });
  },
  watch: {
    player: { // 监听player
      deep: true,
      handler(val) {
        let _that = this;
        this.$refs.au.addEventListener("canplay", function() {
          _that.player.ready = true;
        });
        if (val.ready) {
          if (val.play) {
            this.action();
          } else {
            this.stop();
          }
        }
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
  height: 10vh;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgb(97, 97, 97); /* no*/
  h3 {
    font: 18px/20px "黑体" 500;
  }
  .play {
    font-size: 30px;
  }
}
</style>