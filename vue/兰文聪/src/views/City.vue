<template>
	<div class="box">
		<van-index-bar 
		:index-list="pylist"
		>
		<div v-for="(zimu,i) in pylist" :key="i">
			<van-index-anchor  :index="zimu" />
			<van-cell @click="gotomovie(city)" v-for="(city,i) in cityList.filter(item=>item.pinyin.indexOf(zimu.toLowerCase())===0)"  :title="city.name"  :key="i" />
		</div>
		</van-index-bar>
	</div>
</template>

<script>
export default {
	data(){
		return {
			cityList:[],
			pylist: ["A","B",
        "C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"],
		}
	},
	methods: {
		gotomovie(city){
			localStorage.city=JSON.stringify(city);
			this.$router.push({name:"movie"})
		}
	},
	mounted() {
		this.$axios.get("/maizuo/gateway",{
			headers:{
				"X-Host": "mall.film-ticket.city.list"
			}
		}).then(res=>{
			this.cityList=res.data.data.cities;
			// console.log(this. cityList.filter(item=>item.pinyin.indexOf("A".toLowerCase())===0))
		})
	},
}
</script>