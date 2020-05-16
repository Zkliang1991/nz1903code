<template>
    <div>
        <Head title="个人中心"></Head>
        <div v-if="token">
             <h3>个人中心 Mine --- {{count}}</h3>
             <h4>token == {{token}}</h4>
             <h4>用户名 ==== {{userInfo.username}}   </h4>
             <h4>手机号码 ==== {{userInfo.mobile}}  / {{mobile}} </h4>
             <h4>nickname == {{ nickname }} </h4>
             <van-button type="primary" @click="changeUsers({nickname:'NZ1903'})">点击修改 nickname</van-button>
             <UploadImg ref="one" ></UploadImg>
        </div>
        <div v-else>
            <h4>亲,你还未登录哦,请马上去登录</h4>
        </div>
       
    </div>
</template>

<script>
import {
    myMixin
} from "@/utils"
import {
    baseURL
} from "@/utils/axios"
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex"
export default {
    mixins:[myMixin],  //  混入到组件实例
    data(){
        return {
            token:sessionStorage.token||"",
            // userInfo:{},
            count:1314
        }
    },
    computed:{
        ...mapState('users',['nickname','userInfo'])
    },
    methods:{
        ...mapMutations('users',['changeUsers']),
        ...mapActions('users',['getUsersAsync'])
    },
    created(){
        console.log(this.$store)
    },
    mounted(){
        this.getUsersAsync();
        // this.$axios.get("/vue/getuserinfo")
        // .then(res=>{
        //     if(res.data.type){
        //         this.userInfo = res.data.result;
        //         if(res.data.result.avatar){
        //             // this.$refs.one.pic = res.data.result.avatar.replace(/public/,baseURL);
        //         }
        //     }
        // })
    }
}
</script>
