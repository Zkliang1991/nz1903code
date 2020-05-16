<template>
    <div :class="animateClass">
        <Head title="影院" :show="true"></Head>
        <div class="top">
            <span class="span1" @click="changcity">{{this.city.name}}</span>
            <span class="span1">APP订票</span>
            <span class="span1">最近去过的</span>
        </div>
        <div class="c-list">
            <router-link v-for="(cinema,i) in cinemaList" :key="i" 
            class="c-item"
            :to="{name:'yydetail',params:{
               cinemaId:cinema.cinemaId 
            }}"
            >
                <div class="c-left">
                    <h4>{{cinema.name}}</h4>
                    <h6>{{cinema.address}}</h6>
                </div>
                <div class="c-right">
                    <p>{{cinema.lowPrice/100 | price}}</p>
                    <strong>距离未知</strong>
                </div>
            </router-link>
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
        return {
            cinemaList:[]
        }
    },
    mounted(){
        this.$axios.get("/maizuo/gateway?ticketFlag=1&k=635051",{
            params:{
                cityId:this.city.cityId
            },
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'   // 根据请求头返回数据
            }
        }).then(res=>{
            console.log(res)
            this.cinemaList = res.data.data.cinemas;
            console.log(this.cinemaList)
        })
    },
    methods:{
        changcity(){
            this.$router.push({name:"city"})
        }
    }
}
</script>

<style lang="scss" scoped>
.c-list{
    width:100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    .c-item{
        width:100%;
        display: flex;
        padding:10px;
        border-bottom:1px solid #ccc;
        box-sizing: border-box;
        .c-left{
            width:70%;
            h4{
                margin-top:2px;
                color:#191a1b;
            }
            h6{
                margin-top: 10px;
                display: block;
                max-width: 80%;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                color:#797d82;
            }
        }
        .c-right{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                margin-top: 2px;
                text-align: right;
                color: #ff5f16;
            }
            strong{
                margin-top:10px;
                color: #797d82;
                text-align: right;                
            }

        }
    }
}
.top{
    height: 49px;
    width: 100%;
    display: flex;
   background: white;
   margin-bottom: 1px;
   margin-top: 1px;
}
.span1{
    margin-left: 20px;
    float: left;
    width: 33.3%;
    line-height: 49px;
    font-size: 14px;
    color: #191a1b;
    letter-spacing: -.2px;
}
</style>