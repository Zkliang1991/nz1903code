<template>
	<div class="box" :class="animateClass">
		<p v-html="news"></p>
	</div>
</template>

<script>
import {animate} from "@/utils"
export default {
	mixins:[animate],
	data(){
		return{
			news:''
		}
	},
	mounted(){
		this.$axios.get("/maizuo/gateway?actId=ElzMZU125260",{
			headers:{
				'X-Host': 'mall.act.static-page.info'
			}
		}).then(res=>{
			this.news=res.data.data.data.content
		})
	}
}
</script>