<template>
    <div class="box" :class="animateClass">
        <Head :title="detail.name" :show="true" ></Head>
        <div>
            <div class="odiv">
                <p class="op" @click="showPopup" v-for="(s,i) in detail.services" :key="i">
                    {{s.name}}
                </p>
            </div>
            <div>
                <h4> {{detail.address}}</h4>
                <van-icon @click="call(detail.phone)"  name="phone-o" size="38" />
            </div>
        </div>
        <van-popup 
        v-model="show"
        position="top"
        
        >
            <div v-for="(s,i) in detail.services" :key="i">
                <p class="name"> {{s.name}}</p>
                <b> {{s.description}}    </b>
            </div>
        </van-popup>

        <div class="swipe">
            <Carousel id="b3" :swiperoptions="options">
                <Carousel-item v-for="(film,i) in films" :key="i" >
                    <img :src="film.poster" alt="">
                </Carousel-item>
            </Carousel> 
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
        return {
            detail:{},
            show:false,
            films:[],
            options:{},
            active:0
        }
    },
    methods:{
        gotoFilm(film){
            this.$router.push({name:'films',params:{
                filmId:film.filmId
            },query:{
                name:film.name
            }})
        },
        call(phone){
            alert(phone);
        },
        showPopup(){
            this.show =!this.show;
        }
    },
    mounted(){
        console.log(this.$route);
        this.$axios.get("/maizuo/gateway/?k=417263",{
            params:{
                cinemaId:this.$route.params.cinemaId
            },
            headers:{
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then(res=>{
            this.detail =res.data.data.cinema;
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
            var that = this;
            this.options = {
                observer:true,
                slidesPerView:"auto",
                effect : 'coverflow',
                // slidesPerView: 2,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 40,
                    stretch: 15,
                    depth: 30,
                    modifier: 2,
                    slideShadows : false,
                },
                on:{
                    slideChange: function(){  // 监听swiper 切换  千万不能使用箭头函数
                        console.log('改变了，activeIndex为'+this.activeIndex);
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
.swiper-container{
    width:80%;
}
.swiper-slide{
    flex:1;
}

.item{
    background: deeppink;
    color:#fff;
    font-size:30px;
}
</style>
