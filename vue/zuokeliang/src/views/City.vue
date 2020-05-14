<template>
    <div class="box" :class="animateClass" >
        <Head title="当前城市" :show="true" ></Head>
        <van-notice-bar text="NZ1903-daydayup 五一快乐 五一happy 五一多多写代码" left-icon="volume-o" />
        <van-index-bar :index-list="pylist" >
            <div v-for="(py,i) in pylist"  :key="i" > 
                <van-index-anchor :index="py" />
                <van-cell 
                v-for="(city,index) in obj.cityList.filter(item=>item.pinyin.indexOf(py.toLowerCase())=='0')"
                :key="index"
                :title="city.name" 
                @click="selectCity(city)"
                />
            </div>
        </van-index-bar>
    </div>
</template>


<script>
import { Toast } from "vant";
import {mapState,mapActions } from "vuex";
import {
  animate
} from "@/utils"
export default {
  mixins:[animate],
  data() {
    return {
      cityList: [],
      pylist: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        // "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        // "U",
        // "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  computed:{
    ...mapState(['obj'])
  },
  methods:{
      ...mapActions(['getCityList']),
      selectCity(city){
          console.log(city);
          localStorage.setItem("city",JSON.stringify(city)); // vuex
          this.$router.push({name:"movie"});
      }
  },
  mounted() {
    if(!this.obj.cityList.length>0){
        this.getCityList()
    }
    
    // Toast.loading({
    //   message: "加载中...",
    //   forbidClick: true,
    //   loadingType: "spinner",
    //   duration: 10000
    // });
    // this.$axios({
    //   url: "/maizuo/gateway?k=2020849",
    //   headers: {
    //     "X-Client-Info":
    //       '{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',
    //     "X-Host": "mall.film-ticket.city.list"
    //   }
    // }).then(res => {
    //   Toast.clear();
    //   console.log(res);
    //   this.cityList = res.data.data.cities;
    //   Toast.success("获取城市信息成功");
    // });

    // fetch("https://m.maizuo.com/gateway?k=2020849",{
    //   headers: {
    //     "X-Client-Info":
    //       '{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',
    //     "X-Host": "mall.film-ticket.city.list"
    //   }
    // }).then(res=>res.json())
    // .then(res=>{
    //   console.log(res)
    // })
  }
};
</script>
