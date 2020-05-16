<template>
    <div class="box">
        <Head title="搜索" :show="true" :search="true"></Head>
         <van-search
            v-model="keyword"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
        >   
            <template #action>
                <div @click="todoSearch">搜索</div>
            </template>
         </van-search>
    </div>
</template>

<script>
import {
    mapState
} from "vuex"
export default {
    data(){
        return {
        //    keyword:"" 
        }
    },
    computed:{
        // ...mapState('search',['keyword'])
        keyword:{
            get(){
                return this.$store.state.search.keyword;
            },
            set(newVal){
                this.$store.commit("search/changeKw",newVal); // 提交mutation 去修改 vuex 数据
            }
        }
    },
    methods:{
        onSearch(value){   // enter 
            console.log(value)
        },
        todoSearch(e){
            console.log(this.keyword)
        }
    }
}
</script>


