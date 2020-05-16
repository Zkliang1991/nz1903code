<template>
    <div>
        <van-tabbar v-model="active" route>
        <van-tabbar-item 
        v-for="(foot,i) in foots" 
        :key="i"
        :to={name:foot.name}
        :badge="i==3?'5':''"
        >
            <span>{{foot.txt}}</span>
            <template #icon="props">
            <i class="iconfont" v-html="foot.icon"></i>
            </template>
        </van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script>
import {
	foots
} from "@/utils"
export default {
    data(){
        return{
            active:0,
            foots
        }
    },
    methods:{
    },
    mounted(){
    }
}
</script>