
// 用户模块
import {axios} from "@/utils/axios";
export const usersMoudle = {
    namespaced:true,  // 命名空间
    state:{
        nickname:"zuzouomu",
        userInfo:{}
    },
    actions:{
        getUsersAsync({commit}){
            axios.get("/vue/getuserinfo")
            .then(res=>{
                if(res.data.type){
                    commit("getUsersAsync",res.data.result);
                }
            })
        }
    },
    mutations:{
        getUsersAsync(state,payload){
            // state.userInfo = {...state.userInfo,...payload}
            state.userInfo = payload;
        },
        changeUsers(state,payload){
            // {nickname:'xasdsd'}
            // state = {...state,...payload};  // state 执行返回新的 state 原来的state 作废
            state.nickname = payload.nickname;
        }
    },
    getters:{

    }
}