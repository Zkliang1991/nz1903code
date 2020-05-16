<template>
	<div class="box">
		<van-form @submit="registrySubmit">
			<van-field
				v-model="registerdata.mobile"
				name="mobile"
				label="手机号"
				placeholder="手机号"
				:rules="[{ required: true, message: '请填写手机号' }]"
			/>
			<van-field
				v-model="registerdata.username"
				name="username"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				v-model="registerdata.password"
				type="password"
				name="password"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<van-field
				v-model="registerdata.dbpwd"
				type="password"
				name="dbpwd"
				label="确认密码"
				placeholder="确认密码"
				:rules="[{ required: true, message: '请确认密码' }]"
			/>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">
				提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
export default {
	data(){
		return{
			registerdata:{}
		}
	},
	methods: {
		registrySubmit(){
			this.$axios.post("/vue/register",this.registerdata).then(res=>{
				if(res.data.type){
					localStorage.mobile=res.data.result[0].mobile
					this.$router.push({name:"login"})
				}
			})
		}
	},

}
</script>

<style lang="scss" scoped>
	
</style>