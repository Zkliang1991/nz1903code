<template>
    <div :class="animateClass">
        <!-- <Head title="电影" :show="true"></Head> -->
        <div class="m-box">
            <!-- <p class="m-city">{{city.name}}</p> -->
        <Lunbo v-if="show"
            id="one"
            :swiperoptions="swiperOptions"
        >
            <Lunbo-item v-for="(m,i) in mv" :key="i">
                <img class="imgs" :src="m.images.large.replace(/img7/,'img3')" alt="">
            </Lunbo-item>
        </Lunbo>
        </div>
        <div>
            <van-tabs v-model="active">
            <van-tab title="正在热播">
                <div class="content">
                    <div class="content-div1" v-for="(mc,i) in mvlist" :key="i"
                    @click="todetai(mc)"
                    >
                          <div class="imgs">
                               <img :src="mc.poster" alt="" class="mc-pic">
                          </div>
                          
                       <div class="mcontent">
                           <p class="name">{{mc.name}}</p>
                           <p class="grade">观众评分{{mc.grade}}</p>
                           <p class="director">主演：{{mc.director}}</p>
                           <p class="runtime">{{mc.nation}} | {{mc.runtime}}</p>
                       </div>
                       <div class="gp">
                           购票
                       </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="即将上映">
                <div class="content-div1" v-for="(mcs,i) in mvlists" :key="i"
                  @click="todetai(mcs)"
                >
                          <div class="imgs">
                             <img :src="mcs.poster" alt="" class="mc-pic">
                          </div>
                          
                       <div class="mcontent">
                            <p class="name">{{mcs.name}}</p>
                            <p class="director">主演：{{mcs.director}}</p>
                            <p>上映日期：周五 12月18日</p>
                       </div>
                       <div class="gp">
                           购票
                       </div>
                </div>
            </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import {
    myMixin,
    animate
} from "@/utils"
export default {
    mixins:[myMixin,animate],
    data(){
        return{
            active:0,
            show:false,
            imgs:[],
            mv:[],
            city:{},
            mvlist:[],
            mvlists:[],
            swiperOptions:{
                loop:true,
                autoplay:true,
                 pagination: {   // 分页器 
                    el: '.swiper-pagination',
                },
                observer:true
            }
        }
    },
    created(){
        this.$axios.get("/maizuo/gateway?k=1915941&pageNum=1&pageSize=10&type=1",{
            params:{
                 cityId:JSON.parse(localStorage.city).cityId
            },
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            this.mvlist=res.data.data.films;
        });
        this.$axios.get("/maizuo/gateway?k=1462505&pageNum=1&pageSize=10&type=2",{
            params:{
                 cityId:JSON.parse(localStorage.city).cityId
            },
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            this.mvlists=res.data.data.films;
            console.log(this.mvlists)
        });
    },
    mounted(){
        if(localStorage.city){
            var city=JSON.parse(localStorage.city);
            console.log(city.cityId);
            this.city=city;
        }else{
            this.$router.push({name:"city"})
        }
    },
    methods:{
        todetai(item){
            this.$router.push({name:"goup",params:{
               filmId:item.filmId
            }})
        },
    }
}
</script>


<style lang="scss" scoped>

.op{
    width:150px;
    min-height:150px;
    background:yellow;
}
.imgs{
    width: 100%;
    height: 300px;
}
.m-box{
    position: relative;
}
.m-city{
    position: absolute;
    top:20px;
    left:20px;
    border:2px solid khaki;
    color:gainsboro;
    width:48px;
    height:20px;
    border-radius: 10px;
    z-index:10;
    text-align: center;
    line-height: 20px;
    padding:0 5px;
}
.content-div1{
    height: 124px;
    width: 100%;
    background: white;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 4px;
    // position: absolute;
}
.mc-pic{
    width: 66px;
    height: 90px;
}
.imgs{
     width: 66px;
    height: 90px;
    float: left;
    margin-right: 10px;
}
.mcontent{
    // float: right;
    height: 94px;
    width: 220px;
    float: left;
}
.name{
    max-width: calc(100% - 25px);
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.grade,.runtime,.director{
    font-size: 13px;
    margin-top: 4px;
    color: #797d82;
}
.gp{
    float: left;
    width: 30px;
    height: 20px;
    margin-left: 10px;
    margin-top: 30px;
    border: 1px solid salmon;
    text-align: center;
    color: salmon;
}
</style>