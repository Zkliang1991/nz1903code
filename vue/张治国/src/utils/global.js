// 注册全局组件
import Vue from "vue";

import HeadOther from "@/components/HeadOther";
import MyAudio from "@/components/MyAudio";
import FootPlayer from "@/components/FootPlayer";
import MySwiper from "@/components/MySwiper";
import Carousel from "@/components/Carousel";
import CarouselItem from "@/components/CarouselItem";

Vue.component("HeadOther",HeadOther);
// Vue.component("MyAudio",MyAudio);
Vue.component("FootPlayer",FootPlayer);
Vue.component("MySwiper",MySwiper);
Vue.component("Carousel",Carousel);
Vue.component("CarouselItem",CarouselItem);