<template>
    
    <div class="box">
         <Head :title="$route.query.name" :show="true"></Head>
         <div v-if="film.filmType">
            <div >
                 <img :src="film.poster" alt="" class="poster">
            </div>
                <div class="content">
                    <div class="content-div1">
                        <span class="name">{{film.name}}</span>
                        <span class="item">{{film.item.name}}</span>
                        <span class="grade" >{{film.grade}}分</span>
                    </div>
                    <div class="category">{{film.category}}</div>
                    <p class="premiereAt">2019-12-20 上映</p>
                    <p class="nation">{{film.nation}} | 分钟</p>
                    <p class="syn">{{film.synopsis}}</p>
                </div>
                <div class="pro">
                    <p style=" font-size:35px;">演职人员</p>
                </div>
                <div class="pic">
                    <div v-for="(ac,i) in film.actors" :key="i" class="pics">
                        <img :src="ac.avatarAddress" alt="" class="actor">
                        <p class="ac-name">{{ac.name}}</p>
                        <p>{{ac.role}}</p>
                    </div>
                </div>
                <div class="jz">
                    <p style=" font-size:35px;">剧照</p>
                </div>
                <div class="jz-pic">
                    <div v-for="(p,i) in film.photos" :key="i">
                        <img :src="p" alt="" class="jzpic">
                    </div>
                </div>
         </div>
    </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
    data(){
        return{
            film:[]
        }
    },
    methods:{
        showdiglog(){
              Dialog.confirm({
                title: '标题',
                message: '该影片目前没有排期，到首页观看其他的电影',
                })
                .then(() => {
                    // on confirm
                    this.$router.push({name:"movie"})
                })
                .catch(() => {
                    // on cancel
                });
        }
    },
    mounted(){
        this.$axios.get("/maizuo/gateway?k=4388992",{
             params:{
                filmId:this.$route.params.filmId  // 看路由的冒号参数 
            },
            headers:{
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            this.film=res.data.data.film;
            if(!this.film.isPresale){
                this.showdiglog()
            }
        })
    }
}
</script>
<style lang="scss" scoped>
body{
    background: gainsboro;
}
.poster{
    width: 100%;
    height: 250px;
}
    .content{
        height: 190px;
        width: 100%;
        background: white;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .grade{
        font-size: 18px;
        font-style: italic;
        text-align: right;
        color: #ffb232;
        margin-left: 140px;
    }
    .name{
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
    }
    .item{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
    }
    .category{
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
            
    }
    .premiereAt{
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
    }
    .nation{
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
    }
    .syn{
        height: 38px!important;
        overflow: hidden;
        margin-top: 12px;
        font-size: 13px;
        color: #797d82;
    }
    .pro{
        width: 100%;
        height: 52.5px;
        background: white;
        box-sizing: border-box;
        padding: 15px;
    }
    .pic{
        width: 100%;
        height: 131px;
        background: white;
        padding-left: 15px;
        box-sizing: border-box;
        display: flex;
        overflow: scroll;
        margin-bottom: 10px;
    }
    .pics{
         flex:1;
    }
    .actor{
        width: 85px;
        height: 100px;
        margin-right: 10px;
    }
    .ac-name{
        font-size: 12px;
    }
    .jz{
        width: 100%;
        height: 62px;
        background:white;
        box-sizing: border-box;
        padding: 15px;
    }
    .jz-pic{
        width: 100%;
        height: 115px;
        background: white;
        display: flex;
        overflow: scroll;
    }
    .jzpic{
        width: 150px;
        height: 100px;
        float: left;
        margin-right: 10px;
    }
</style>