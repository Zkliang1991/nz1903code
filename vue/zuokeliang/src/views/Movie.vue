<template>
    <div class="box" :class="animateClass">
        <Head title="电影"></Head>
        <div class="m-box">
            <p class="m-city" @click="gotoCity">{{city.name}}</p>
            <Carousel 
                id="banner"
                :swiperoptions="swiperOptions"
            >
                <Carousel-item v-for="(m,i) in obj.banner" :key="i">
                    <img :src="m.images.large.replace(/img7/,'img3')" alt="" class="m-img">
                </Carousel-item>
            </Carousel>
        </div>
        <Carousel
            id="b1"
            :swiperoptions="swiperOptions"
            v-if="false"
        >
            <Carousel-item v-for="(item,i) in imgs" :key="i">
                <img :src="item" alt="" class="m-img">
            </Carousel-item>
        </Carousel>

        

    </div>
</template>

<script>
import {
    myMixin,
    animate
} from "@/utils"
import {
    mapState,
    mapActions
} from "vuex"
export default {
    mixins:[myMixin,animate],
    methods:{
        ...mapActions([
            'getBanner'  // this.getBanner  = this.$store.dispatch('getBanner')
        ]),
        gotoCity(){
            this.$router.push({name:'city'})
        }
    },
    computed:{
        ...mapState([
            'obj'
        ])
    },
    data(){
        return {
            imgs:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
                require("@/assets/images/img4.jpg"),                
            ],
            mv:[],
            swiperOptions:{
                // loop:true,
                autoplay:true,
                pagination: {   // 分页器 
                    el: '.swiper-pagination',
                },
                observer:true // 修改swiper自己或子元素时，自动初始化swiper
            },
        }
    },
    created(){
        setTimeout(()=>{
            if(!this.obj.banner.length>0){
                this.getBanner();   // vuex 的 临时缓存
            }
            
            // this.$axios.get("/vue/movie?limit=6")
            // .then(res=>{
            //     this.$nextTick(()=>{
            //         this.mv = res.data.result; // 一定会进入 updated 
            //     });
            //     // this.mv.splice(2,1);
            // })
        },1)
        
    }
}
</script>

<style lang="scss" scoped>
.op{
    // 之前设计稿默认 750     
    // rem 系数 改成 37.5 ===> 遵循设计稿宽度 375px==750pt   
    // 量出的所有尺寸 先除以 2   
    width:150px;
    height:150px;
    background: darkcyan;
}
.m-img{
    width:100%;
    height:200px;

}
.m-box{
    position: relative;
}
.m-city{
    position: absolute;
    top:20px;
    left:20px;
    border:2px solid #0f0;
    color:#abcdef;
    width:48px;
    height:20px;
    border-radius: 10px;
    z-index:10;
    text-align: center;
    line-height: 20px;
    padding:0 5px;
}
</style>
