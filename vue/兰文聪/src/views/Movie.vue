<template>
	<div class="box" :class="animateClass">
		<van-tabs 
		v-model="active"
		color="#ff5f16"
		title-active-color="#ff5f16"
		>
		<van-tab title="正在热映">
			<div class="filmitem" v-for="(film,i) in filming" :key="i">
				<div class="left">
					<img :src="film.poster" alt="">
				</div>
				<div class="right">
					<h3>{{film.name}}</h3>
					<p class="p1">主演: <span v-for="(actor,i) in film.actors?film.actors:[{name:'暂无主演'}]" :key="i">{{actor.name}}</span></p>
					<p>类型:{{film.category}}</p>
				</div>
			</div>
		</van-tab>
		<van-tab title="即将上映">
			<div class="filmitem" v-for="(film,i) in filmfuture" :key="i">
				<div class="left">
					<img :src="film.poster" alt="">
				</div>
				<div class="right">
					<h3>{{film.name}}</h3>
					<p class="p1">主演: <span v-for="(actor,i) in film.actors?film.actors:[{name:'暂无主演'}]" :key="i">{{actor.name}}</span></p>
					<p>类型:{{film.category}}</p>
				</div>
			</div>
		</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import {mymixin,animate} from "@/utils"
export default {
	mixins:[mymixin,animate],
	data(){
		return{
			active:0,
			// city:{},
			filming:[],
			filmfuture:[]
		}
	},
	created() {
		// this.$axios.get("/vue/movie?limit=5").then(res=>{
		// 	// console.log(res);
		// })
	},
	mounted() {
		this.$axios.get("/maizuo/gateway",{
			params:{
				cityId:this.city.cityId,
				pageNum:1,
				pageSize:10,
				type:1
			},
			headers:{
				'X-Host': 'mall.film-ticket.film.list'
			}
		}).then(res=>{
			this.filming=res.data.data.films;
			// console.log(this.filming);
			
		})

		this.$axios.get("/maizuo/gateway",{
			params:{
				cityId:this.city.cityId,
				pageNum:1,
				pageSize:10,
				type:2
			},
			headers:{
				'X-Host': 'mall.film-ticket.film.list'
			}
		}).then(res=>{
			this.filmfuture=res.data.data.films
			// console.log(this.filmfuture);
		})
	},
}
</script>

<style lang="scss" scoped>
.filmitem{
	width: 100%;
	height: 125px;
	box-sizing: border-box;
	display: flex;
	padding: 15px;
	background-color: white;
	.left{
		width: 66px;
		height: 90px;
		img{
			width:100%;
			height: 100%;
		}
	}
	.right{
		width: 60%;
		height: 100%;
		padding-left:15px;
		h3{
			font-size: 24px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.p1{
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
}
</style>