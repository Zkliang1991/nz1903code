import bus from './bus';

export const forFootShowMixin = { // 为了判断FootPlayer组件是否显示，发送事件
  mounted(){
    bus.$emit("footshow",false);
  },
  beforeRouteLeave(to,from,next){
    console.log('out');
    bus.$emit("footshow",true);
    next();
  },
  created(){
    console.log('forFootShow mixins model success!!!');
  }
}