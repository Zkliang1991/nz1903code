<template>
    <div>
        <h2> vuex 入门学习 </h2>
        <h2> Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 </h2>
        <hr>
        <h2>
            city == {{ city }}   /  {{city2}}
        </h2>
        <h2>count === {{count}}  /  {{count2}}  / {{0}} </h2>
        <h2>word == {{word1}}  </h2>
        <p> <input type="text" :value="word1" @input="changeWord($event.target.value)"  > </p>
        <h2>msg == {{msg}}</h2>
        <p v-for="(py,i) in yum.players" :key="i">
            {{py.name}}
        </p>
        <hr>
        <van-button type="primary"  @click="changeNum">修改foot num</van-button>
        <van-button type="danger"  @click="changeCount(10)">修改 count + 10</van-button>
        <van-button type="warning"  @click="countDesc">修改 count -- </van-button>
        <van-button type="warning"  @click="changeCity('beautiful wuhan')"> 我想去 美丽的  武汉 </van-button>
        <van-button type="primary"  @click="changeMsgAction"> 异步数据msg 修改 </van-button>
        
    </div>
</template>

<script>
import store from "@/utils"
import {
    CHANGEWORD,
    CHANGECITY,
    COUNTDESC
} from "@/store/types"
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from "vuex"
export default {
    data(){    // 初始化数据  vuex 取值 永远不要使用data
        return {
            city1:this.$store.state.city,  // error
            count1:this.$store.state.count
        }
    },
    computed:{
        ...mapState({
            city2:state=>state.city,
            count2:state=>state.count,
            word1:'word',  // 'word' 等同于 `state => state.word`
        }),
        ...mapState([
            'count',  // 映射 this.count 为 store.state.count
            'city',
            'msg',
            'yum'
        ]),
        ...mapGetters([
            'newCount'
        ])
    },
    // computed:mapState({
    //     city2:state=>state.city,
    //     count2:state=>state.count,
    //     word1:'word',  // 'word' 等同于 `state => state.word`
    // }),

    // computed:{  // 依赖属性
        // city2(){
        //     return this.$store.state.city;
        // },
        // count2(){
        //     return this.$store.state.count;
        // },
        // newCount(){
        //     return this.$store.getters.newCount
        // },
        // word1:{
        //     get(){
        //         return this.$store.state.word;
        //     }
        // },
        // msg1(){
        //     return this.$store.state.msg
        // },
        // yum(){
        //     return this.$store.state.yum
        // }
    // },
    methods:{
        ...mapMutations({
            changeNum:'changeNum'  // 将 `this.changeNum()` 映射为 `this.$store.commit('changeNum')`
        }),
        ...mapMutations([
            'changeCount',    // this.changeCount  this.$store.commit("changeCount")
            COUNTDESC,
            CHANGECITY,   // this.changeCity  this.$store.commit("changeCity")
            CHANGEWORD    // this.changeWord  
        ]),
        ...mapActions({
            changeMsgAction:'changeMsg'  // this.changeMsgAction == this.$store.dispatch('changeMsg')
        }),
        ...mapActions([
            'getPlayers'   // this.getPlayers = this.$store.dispatch('getPlayers')
        ]),
        // changeNum(){
        //     this.$store.commit("changeNum");  // commit mutation 提交  
        // },
        // changeCount(num){
        //     // commit(type,payload); 
        //     this.$store.commit("changeCount",num)  // mutation type 
        // },
        // countDesc(){
        //     this.$store.commit(COUNTDESC)
        // },
        // changeCity(city){
        //     this.$store.commit(CHANGECITY,city)
        // },
        // changeWord(e){
        //     // this.word = "I Miss YOu"
        //     // this.$store.commit(CHANGEWORD,e.target.value);
            
        // },
        // changeMsgAction(){
        //     // dispatch 发送 action 
        //     this.$store.dispatch("changeMsg");
        // }
    },
    mounted(){
        console.log(this.$store);
        // this.$store.dispatch("getPlayers")
        this.getPlayers();
    }
}
</script>


<style lang="scss" scoped>
h2{
    color:deepskyblue;
    font-size: 24px;
}
</style>

