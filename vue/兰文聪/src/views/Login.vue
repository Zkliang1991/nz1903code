<template>
	<div class="box">
		<van-tabs
		color="#ff5f16"
		title-active-color="#ff5f16"
		v-model="active">
		<van-tab title="账号密码登录">
			<van-form @submit="loginSubmit">
				<van-field
					v-model="logindata.mobile"
					name="username"
					label="手机号"
					placeholder="手机号"
					:rules="[{ required: true, message: '请填写手机号' }]"
				/>
				<van-field
					v-model="logindata.password"
					type="password"
					name="password"
					label="密码"
					placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]"
				/>
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit">
					立即登录
					</van-button>
				</div>
				<div style="margin: 16px;">
					<van-button
					@click="gotoregistry"
					round block type="warning" 
					size="38"
					native-type="submit">
					未注册,去注册
					</van-button>
				</div>
			</van-form>
		</van-tab>
		<van-tab title="验证码登录">
			<van-form>
				<van-field
				v-model="mobile"
				type="mobile"
				name="mobile"
				label="手机号"
				placeholder="请输入手机号"
				:rules="[{ required: true, message: '请填写手机号' }]"
				>
				<template #button>
					<van-button @click="getSms" size="small" type="primary">获取验证码</van-button>
				</template>
				</van-field>
				<van-field
					v-model="sms"
					type="password"
					name="sms"
					label="验证码"
					placeholder="请输入验证码"
					:rules="[{ required: true, message: '请填写验证码' }]"
				/>
				<div style="margin: 16px;">
					<van-button 
					@click="checksms"
					round block type="info" native-type="submit">
					验证登录
					</van-button>
				</div>
				<div style="margin: 16px;">
					<van-button
					@click="gotoregistry"
					round block type="warning" 
					size="38"
					native-type="submit">
					未注册,去注册
					</van-button>
				</div>
			</van-form>
		</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data(){
		return{
			active:0,
			logindata:{},
			mobile:'',
			sms:''
		}
	},
	methods:{
		checksms(){
			this.$axios.get("/yun/captcha/verify",{
				params:{
					phone:this.mobile,
					captcha:this.sms
				}
			}).then(res=>{
				if(res.data.code===200){
					localStorage.mobile=this.mobile;
					localStorage.isLogin=true;
					this.$router.push({name:"movie"})
				}else{
					localStorage.isLogin=false;
				}
			})
		},
		gotoregistry(){
			this.$router.push({name:"register"})
		},
		loginSubmit(){
			this.$axios.post("/vue/login",this.logindata).then(res=>{
				if(res.data.type){
					sessionStorage.token=res.data.token;
					localStorage.mobile=res.data.data.mobile;
					localStorage.isLogin=true;
					this.$router.push({name:"movie"})
				}
			})
		},
		getSms(){
			this.$axios.get("/yun/captcha/sent",{
				params:{
					phone:this.mobile
				}
			}).then(res=>{
				console.log('验证码发送成功');
			})
		}
	},
	mounted(){
		if(!!localStorage.mobile){
			this.logindata.mobile=localStorage.mobile;
			this.mobile=localStorage.mobile;
		}
	}
}
</script>

<style lang="scss" scoped>
	h3{
		font-size: 20px;
		font-weight: bolder;
		text-align: center;
		padding-top: 30px;
	}
</style>