// 允许注册全局组件 全局指令 全局过滤器 

import Vue from "vue"
import Foot from "@/components/Foot.vue"
import Vfoot from "@/components/Vfoot.vue"
import Head from "@/components/Head.vue"
import Carousel from "@/components/Carousel.vue"
import CarouselItem from "@/components/CarouselItem.vue"
import UploadImg from "@/components/UploadImg.vue"
import Vuex from "@/components/Vuex.vue"




Vue.component("Foot",Foot)
Vue.component("Vfoot",Vfoot);
Vue.component("Head",Head);
Vue.component("Carousel",Carousel);
Vue.component("CarouselItem",CarouselItem);
Vue.component("UploadImg",UploadImg);
Vue.component("Vuex",Vuex);


Vue.filter("price",value=>{
    if(!value) return value;
    return "￥"+  value.toFixed() + " " +  "起"; 
})