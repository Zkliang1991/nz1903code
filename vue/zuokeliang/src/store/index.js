import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Vuex 分层
// 单向数据流  state===>  views  ===>  actions  ===> state 

// state  所有组件的状态对象    驱动应用的数据源
// Vuex 使用单一状态树   用一个对象 state 来保存所有组件的状态

// getter 附加属性  就是对 state 进行优化 派生 (过滤 筛选 )

// mutations   修改状态的地方 
// mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)
// mutation 只能写 同步操作 

// actions
// 1 Action 提交的是 mutation，而不是直接变更状态
// 2.Action 可以包含任意异步操作

// moudles 模块化  允许把store 拆分成细小的 store 

// store  每一个 Vuex 应用的核心就是 store（仓库）

import {
  CHANGEWORD,
  CHANGECITY,
  COUNTDESC
} from "./types"
import {axios} from "@/utils/axios";
import {
  usersMoudle
} from "./users"
import {
  searchModule
} from "./search"
const store =  new Vuex.Store({ 
  modules: {
    users:usersMoudle,
    search:searchModule
  }, 
  state: {
      count:1903,
      num:8,
      city:"Tailan-泰国",
      word:"Are you OK",
      msg:"nz1903-daydayup",
      yum:{
        players:[]
      },
      obj:{
        banner:[],
        cinemaList:[],
        cityList:[]
      }
  },
  mutations: {  // 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
    changeNum(state){     // mutation type
      state.num++;
    },
    changeCount(state,payload){   // payload 参数 组件提交过来的 
      state.count += payload;
    },
    [COUNTDESC](state){  // 每个回调函数都接受state 作为第一个参数 
      state.count--;
    },
    [CHANGECITY](state,payload){
      state.city = payload;
    },
    [CHANGEWORD]:function(state,payload){  //  mutations[xxx]    ES2015 风格的计算属性命名功能来使用一个常量作为函数名
      state.word = payload;
    },
    changeMsg(state,payload){
      state.msg = payload;
    },
    getPlayers(state,payload){
      // 当需要在对象上添加新属性时  
      // state.yum.players = payload;   // 旧对象  
      state.yum = {...state.yum,players:payload};  // 新对象 
    },
    getBanner(state,payload){
      state.obj = {...state.obj,banner:payload};
    },
    getCinemas(state,payload){
      state.obj = {...state.obj,cinemaList:payload};
    },
    getCityList(state,payload){
      state.obj = {...state.obj,cityList:payload};
    }
  },

  actions: {  // 如果有异步请求 使用action
    changeMsg(context){  // action 一定有 提交 mutation 的操作 
      // ajax  
      axios.get("/vue")
      .then(res=>{
        context.commit("changeMsg",res.data.msg);
      })
    },
    getPlayers({commit}){  // context = {commit:function(){}}  = {commit:commit} = {commit}
      axios.get("/yun/toplist/artist")
      .then(res=>{
          commit("getPlayers",res.data.list.artists);
      })
    },
    getBanner({commit}){
      axios.get("/vue/movie?limit=5")
      .then(res=>{
        commit("getBanner",res.data.result);
      })
    },
    getCinemas({commit},{cityId,cb}){
      // this.$axios;
      axios.get("/maizuo/gateway?ticketFlag=1&k=635051",{
          params:{
              cityId
          },
          headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',
              'X-Host': 'mall.film-ticket.cinema.list'   // 根据请求头返回数据
          }
      }).then(res=>{
          cb()
          commit("getCinemas",res.data.data.cinemas);
      })
    },
    getCityList({commit}){
      axios({
        url: "/maizuo/gateway?k=2020849",
        headers: {
          "X-Host": "mall.film-ticket.city.list"
        }
      }).then(res => {
        commit("getCityList",res.data.data.cities)
      });
    }
  },

  getters:{
    newCount(state){
      return state.count + 1000;
    }
  }
})

export default store;
