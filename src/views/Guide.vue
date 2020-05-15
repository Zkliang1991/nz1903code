<template>
    <div class="guide box">
        <van-swipe
            class="my-swipe" 
            :autoplay="3000" 
            indicator-color="white"
        >
            <van-swipe-item v-for="(img,i) in imgs" :key="i">
                <img @click="gotoMain(i)" :src="img" alt=""  class="g-img">
            </van-swipe-item>  
        </van-swipe>
    </div>
</template>

<script>
// 封装 类似这样的 Swiper 组件 
import img4 from "@/assets/images/slide4.png"
export default {
    data(){
        return {
            imgs:[
                //  引入本地的静态文件 必须模块化引入
                require("@/assets/images/slide1.png"),
                require("@/assets/images/slide2.png"),
                require("@/assets/images/slide3.png"),
                img4
            ]
        }
    },
    mounted(){
        // 引导欢迎页 显示次数  
        if(localStorage.visitCount){
            // 判断是否第一次访问 
            localStorage.visitCount++;  
            if(localStorage.visitCount>3){
                this.$router.push({name:"movie"})
            }
        }else{
            // 这是第一次访问
            localStorage.visitCount = 1;
        }
    },
    methods:{
        gotoMain(i){
            if(i==this.imgs.length-1){
                this.$router.push({name:"movie"})
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.my-swipe,.g-img{
    width:100%;
    height:100%;
}
</style>
