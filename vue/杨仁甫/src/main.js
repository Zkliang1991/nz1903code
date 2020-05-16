/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import "lib-flexible";  

import "@/styles/index.scss";

import "@/utils/vant"; 

import "@/utils/quan";

import {axios} from "@/utils/axios"
Vue.prototype.$axios = axios; 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
