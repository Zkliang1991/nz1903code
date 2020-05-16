<template>
	<div class="box" :class="animateClass">
		<div class="cinemaitem" v-for="(cinema,i) in cinemaList" :key="i">
			<div class="left">
				<p class="one">{{cinema.name}}</p>
				<p class="two">{{cinema.address}}</p>
			</div>
			<div class="right">
				<p class="one">{{cinema.lowPrice/100|price}}</p>
				<p class="two">距离未知</p>
			</div>
		</div>
	</div>
</template>

<script>
import {mymixin,animate} from "@/utils"
export default {
	mixins:[mymixin,animate],
	data(){
		return{
			cinemaList:[],
		}
	},
	created(){
	},
	mounted(){
		this.$axios.get("/maizuo/gateway",{
			params:{cityId:this.city.cityId},
			headers:{
				'X-Host': 'mall.film-ticket.cinema.list'
			}
		}).then(res=>{
			this.cinemaList=res.data.data.cinemas;
		})
	},
}
</script>

<style lang="scss" scoped>
.cinemaitem{
	width: 100%;
	height:75px;
	padding: 15px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	// border-top:1px solid #ccc;/*no*/
	border-bottom:1px solid #ccc;/*no*/
	.left{
		width: 70%;
		height: 100%;
		.one{
			color: #191a1b;
			font-size: 15px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.two{
			color: #797d82;
			font-size: 12px;
			margin-top: 5px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	.right{
		width: 20%;
		height: 100%;
		.one{
			color: #ff5f16;
			font-size: 15px;
			text-align: center;
		}
		.two{
			margin-top: 5px;
			text-align: center;
		}
	}
}
</style>