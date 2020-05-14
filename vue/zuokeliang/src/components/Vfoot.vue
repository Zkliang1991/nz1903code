<template>
    <footer>
        <van-tabbar v-model="active"  
        active-color="orange" 
        :route="true">
            <van-tabbar-item 
                v-for="(foot,i) in foots" 
                :key="i"
                :to="{name:foot.name}"
                :badge="i==3?num:''"
            >   
                <span>{{foot.txt}}</span>
                <template #icon="props">
                    <i class="iconfont" v-html="foot.icon"></i>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </footer>
</template>


<script>
import {
    foots
} from "@/utils";

import store from "@/store" ;   
import {
    mapState
} from "vuex";
export default {
    data(){
        return {
            active:0,
            foots,
        }
    },
    computed:{
        ...mapState(['num'])
        // num(){
        //     // console.log(this.$store)
        //     return store.state.num;
        // }
    },
    methods:{
        gotoRoute(name){
            // this.$router.push({name})
        }
    },
    watch:{
        // active:function(newVal){
        //     console.log(newVal);
        //     路由跳转
        //     this.$router.push({name:this.foots[newVal].name});
        // }
    },
    mounted(){
        // console.log(this.$route);
        // var name = this.$route.name;
        // this.foots.forEach((item,i)=>{
        //     console.log(item)
        //     if(item.name===name){
        //         this.active = i;
        //     }
        // })
    }
}
</script>

<style lang="scss" scoped>
</style>

