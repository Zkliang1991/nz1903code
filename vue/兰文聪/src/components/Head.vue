<template>
	<div>
		<van-nav-bar
		:title="title"
		:left-text="cityname"
		:left-arrow="show"
		@click-left="onClickLeft"
  		@click-right="onClickRight"
		/>
	</div> 
</template>

<script>
import {Toast} from "vant"
export default {
	props:{
		title:String,
		show:Boolean
	},
	data(){
		return{
			cityname:"北京"
		}
	},
	methods: {
		onClickLeft() {
		Toast('返回');
		},
		onClickRight() {
		this.$router.push({name:"search"})
		},
  	},
}
</script>