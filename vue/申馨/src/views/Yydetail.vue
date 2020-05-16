<template>
    <div class="box" :class="animateClass">
        <Head title="影院详情" :show=true></Head>
        <div>
              <div class="odiv">
                <p class="op" @click="showPopup" v-for="(s,i) in detail.services" :key="i">
                    {{s.name}}
                </p>
            </div>
            <div>
                <h4> {{detail.address}}
                <van-icon @click="call(detail.phone)"  name="phone-o" size="38" />
                </h4>
            </div>
        </div>
         <van-popup 
        v-model="show"
        position="top"
        >
            <div v-for="(s,i) in detail.services" :key="i" >
                <p class="name"> {{s.name}}</p>
                <b class="vop"> {{s.description}}    </b>
            </div>
        </van-popup>
        <div class="swipe">
            <Lunbo id="b3" :swiperoptions="options">
                <Lunbo-item v-for="(film,i) in films" :key="i" >
                    <img :src="film.poster" alt="">
                </Lunbo-item>
            </Lunbo> 
        </div>

        <div v-show="active==i" @click="gotoFilm(film)" class="item" v-for="(film,i) in films" :key="i" >
            <p>{{film.name}} / <span> {{film.grade}} </span>  </p> 
            <p> {{film.category}} | {{film.runtime + '分钟'}} | {{film.director}} |  ></p>
        </div>
    </div>
</template>
<script>
import {
    animate
} from "@/utils"
export default {
     mixins:[animate],
    data(){
        return{
            active:0,
            detail:{},
            show:false,
            films:[],
            options:{},
        }
    },
    methods:{
        gotoFilm(film){

            this.$router.push({name:"mvdetail",params:{
                filmId:film.filmId
            },query:{
                name:film.name
            }
            })
        },
        showPopup(){
            this.show=!this.show;
        },
        call(phone){
            alert(phone);
        },
    },
    mounted(){
        this.$axios.get("/maizuo/gateway?k=417263",{
            params:{
                cinemaId:this.$route.params.cinemaId
                // cinemaId:4876
            },
            headers:{
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then(res=>{
            this.detail=res.data.data.cinema;
            console.log(this.detail)
        })
    },
    created(){
         this.$axios.get("/maizuo/gateway?k=9682114",{
           params:{
                cinemaId:this.$route.params.cinemaId
                // cinemaId:4876
            },
            headers:{
                'X-Host': 'mall.film-ticket.film.cinema-show-film'
            }
        }).then(res=>{
            this.films = res.data.data.films;
            console.log(this.films);
            var that=this;
            this.options={
                effect : 'coverflow',
                slidesPerView: 2,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 40,
                    stretch: 15,
                    depth: 30,
                    modifier: 2,
                    slideShadows : true,
                },
                 on:{
                    slideChange: function(){  // 监听swiper 切换  千万不能使用箭头函数
                        // console.log('改变了，activeIndex为'+this.activeIndex);
                        // this == Swiper 实例 
                        that.active = this.activeIndex;
                    },
                },
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.odiv{
    width:100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    .op{
        padding:5px;
        margin:8px;
        color:#ff5f16;
    }
}
.vop{
     color: gray;
     font-size: 12px;
}
.item{
    background: gray;
    color:#fff;
    font-size:15px;
}
</style>
