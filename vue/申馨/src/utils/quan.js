import Vue from "vue"
import Foot from "@/components/Foot.vue"
import Vfoot from "@/components/Vfoot.vue"
import Head from "@/components/Head.vue"
import Lunbo from "@/components/Lunbo.vue"
import LunboItem from "@/components/LunboItem.vue"
Vue.component("Foot",Foot)
Vue.component("Vfoot",Vfoot)
Vue.component("Head",Head)
Vue.component("Lunbo",Lunbo)
Vue.component("LunboItem",LunboItem)

Vue.filter("price",value=>{
    if(!value) return value;
    return "￥"+value.toFixed()+""+"起"
})