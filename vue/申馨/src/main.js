import Vue from 'vue'
import App from './App.vue'  //跟组件
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import "lib-flexible";//淘宝适配器

// 引入全局的样式
import "@/styles/index.scss"

// 引入vant 
// import Vant from "vant"
// // import 'vant/lib/index.css';//一次性导入所有样式
// Vue.use(Vant)
import "@/utils/vant";

import "@/utils/quan"

import {axios} from "@/utils/axios"
Vue.prototype.$axios=axios;//this.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')   
import { Form } from 'vant'


//(h)=>{return h(APP)}

//  Vue 核心文件 启动项目