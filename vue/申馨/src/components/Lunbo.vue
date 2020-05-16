<template>
    <div class="swiper-container" :id="id">
        <div class="swiper-wrapper">
            <slot>
                插槽
            </slot>
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
    props:{
        id:String,
        swiperoptions:{
            type:Object,
            default:{}
        }
    },
    mounted(){
        let Myswiper = new Swiper("#"+this.id,this.swiperoptions);
    },
    updated(){
        let Myswiper = new Swiper("#"+this.id,this.swiperoptions);
    }
}
</script>