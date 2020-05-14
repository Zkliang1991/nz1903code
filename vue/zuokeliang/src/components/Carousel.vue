<template>
    <div class="swiper-container" :id="id">
        <div class="swiper-wrapper">
            <slot>这是Swiper 内容分发 slot</slot>
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
</template>
<script>
import Swiper from "swiper";    
import "swiper/css/swiper.min.css";

// 封装组件  props + slot 
export default {
    props:{
        id:String,
        swiperoptions:{
            type:Object,
            default:{

            }
        }
    },
    mounted(){
        // Swiper 实例化
        // 死数据
        let mySwiper = new Swiper("#"+this.id,this.swiperoptions);
    },
    updated(){
        // 异步数据
        let mySwiper = new Swiper("#"+this.id,this.swiperoptions);
    }
}
</script>



