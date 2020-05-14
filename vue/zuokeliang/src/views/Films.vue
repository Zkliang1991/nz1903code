<template>
    <div class="box" :class="animateClass" >
        <Head :title="$route.query.name" :show="true"></Head>
        <div v-if="film.filmType">
            <img :src="film.poster" alt="" class="m-img">
            <h3 >{{film.name}}   /   {{film.filmType.name}}</h3>
            <p> {{film.category}}</p>
            <p> {{film.premiereAt}}</p>
            <p> {{film.nation}} |  {{film.runtime}} 分钟</p>
            <div>
                {{film.synopsis}}
            </div>
            <div>
                <h1>演职人员</h1>
                <div class="actors">
                    <div v-for="(ac,i) in film.actors" :key="i">
                        <img :src="ac.avatarAddress" alt="">
                        <p>{{ac.name}}</p>
                        <p>{{ac.role}}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>剧照</h1>
                <div class="photos actors">
                    <div v-for="(p,i) in film.photos" :key="i">
                        <img :src="p" alt="" class="op">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {
    animate
} from "@/utils"
import { Dialog } from 'vant'

export default {
    mixins:[animate],
    data(){
        return {
            film:{}
        }
    },
    created(){
        
    },
    methods:{
        showDiglog(){
            Dialog.confirm({
                // title: '标题',
                message: '该影片目前没有排期,到首页观看其他的电影',
                confirmButtonColor:"#ff5f16",
                overlay:false
            })
            .then(() => {
                // on confirm
                this.$router.push({name:"movie"});
            })
            .catch(() => {
                // on cancel
            });
        },
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
            this.film = res.data.data.film;
            if(!this.film.isPresale){
                this.showDiglog();
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.m-img{
    width:100%;
    height:220px;
}

.actors{
    width:100%;
    display: flex;
    overflow: scroll;
    div{
        flex:1;
    }
}

.op{
    width:200px;
    height:200px;
}
</style>


