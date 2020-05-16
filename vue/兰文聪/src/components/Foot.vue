<template>
	<div>
		<van-tabbar
		v-model="active"
		:fixed="true"
		active-color="#ff5f16"
		:route="true"
		>
		<van-tabbar-item 
		v-for="(ft,i) in foots"
		:key="i"
		:to="{name:ft.name}"
		:badge="i===2?5:''"
		>
			<span>{{ft.txt}}</span>
			<template #icon="props">
				<i class="iconfont" v-html="ft.icon"></i>
			</template>
		</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import {foots} from "@/utils";
export default {
	data(){
		return{
			active:0,
			foots
		}
	},
	methods: {
		// gotoroute(i){
		// 	this.$router.push({name:this.foots[i].name})
		// }
	},
}
</script>