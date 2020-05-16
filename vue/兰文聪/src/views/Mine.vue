<template>
	<div class="box">
		<div v-if="token"  class="logincon" >
			<div class="iconhaha">
				<Imgpic ref="one"></Imgpic>
			</div>
			<p>{{userinfo.mobile}}</p> 
		</div>
		<div v-else class="logincon" @click="gotologin">
			<div class="iconhaha"></div>
			<p>未登录,立即登录 ></p>
		</div>
		<div class="dingdan">
			<van-tabbar :fixed="false"
			active-color="#7d7e80"
			>
			<van-tabbar-item icon="coupon-o">电影订单</van-tabbar-item>
			<van-tabbar-item icon="orders-o">商品订单</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			token:sessionStorage.token||"",
			userinfo:{}
		}
	},
	methods: {
		gotologin(){
			this.$router.push({name:"login"})
		}
	},
	mounted() {
		this.$axios.get("/vue/getuserinfo").then(res=>{
			if(res.data.type){
				this.userinfo=res.data.result;
				
			}
		})
	},
}
</script>

<style lang="scss" scoped>
.logincon{
	width: 100%;
	height: 200px;
	background-color: #FF7226;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.iconhaha{
		width: 63px;
		height: 63px;
		// border: 2px solid #fff;
		border-radius: 50%;
		// background-color: #EDEDED;
		background: url(../assets/images/photo.png) center center;
		background-size: 63px 63px;
		margin-left: 22px;
	}
	p{
		font-size: 20px;
		color: #fff;
		margin-left: 22px;
	}
}
.dingdan{
	height: 80px;
	.van-tabbar{
		height: 100%;
		font-size: 40px;
		.van-tabbar-item{
			font-size: 16px;
			.van-icon{
				font-size: 24px !important;
			}
		}
	}
}
</style>