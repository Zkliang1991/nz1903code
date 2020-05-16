import Vue from "vue"

import Foot from "@/components/Foot.vue";
import Head from "@/components/Head.vue";
import Imgpic from "@/components/Imgpic.vue";


Vue.component("Foot",Foot);
Vue.component("Head",Head);
Vue.component("Imgpic",Imgpic);

Vue.filter("price",val=>{
	if(!val) return val;
	return "¥"+" "+ val.toFixed(1) +" "+"起";
})