/* eslint-disable */
import Vue from 'vue'   // 导入Vue 模块
import App from './App.vue'      // 根组件
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
// Vue 核心文件  启动项目 



import "lib-flexible"; //1. 淘宝适配必须引入的  引入js文件 

// 引入全局的 样式 
import "@/styles/index.scss";

import "@/utils/vant";    // 按需加载 
// 引入 Vant (三)
// import Vant from "vant"
// import 'vant/lib/index.css';  // 一次性导入所有的样式 
// Vue.use(Vant)

import "@/utils/quan"  // 全局注册 
import {axios} from "@/utils/axios"
Vue.prototype.$axios = axios;   // this.$axios = axios 

new Vue({
  router,   // 挂载路由 this.$router 
  store,    //  this.$store 来获取store 对象
  render: h => h(App)   // render Vue 渲染虚拟DOM 的函数 
}).$mount('#app')    // 把虚拟DOM App 载入到 div#app 里面去 

// h=>h(App)
// (h)=> {return h(App)}
// function(h){
//   return h(App)
// }

