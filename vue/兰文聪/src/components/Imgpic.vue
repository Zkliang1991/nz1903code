<template>
	<div>
		<input type="file" class="fileone" ref="file" @change="loadimg" />
		<img @click="imgclick" class="avatar" :src="pic" alt="">
	</div>
</template>

<script>
import pic from "@/assets/images/photo.png"
import {baseURL} from "@/utils/axios"
export default {
	data(){
		return{
			pic,
			baseURL
		}
	},
	methods: {
		getAvatar(){
			this.$axios.get("/vue/getavatar").then(res=>{
				console.log();
				if(res.data.type){
					this.pic=res.data.result.avatar.replace(/public/,this.baseURL);
				}else{
					this.pic=pic
				}
			})
		},
		imgclick(){
			this.$refs.file.click();
		},
		loadimg(){
			var file=this.$refs.file.files[0];
			var data=new FormData();
			data.append("avatar",file);
			this.$axios.post("/vue/uploadimg",data).then(res=>{
				this.pic= res.data.path.replace(/public/,this.baseURL);
				let user={
					path:this.pic,
					mobile:res.data.mobile
				}
				localStorage.user=JSON.stringify(user);
			})
		}
	},
	mounted() {
		if(localStorage.user){
			let user= JSON.parse(localStorage.user);
			if(user.mobile==localStorage.mobile){
				this.pic=user.path;
			}else{
				this.getAvatar()
			}
		}else{
			this.getAvatar()
		}
	},
}
</script>

<style lang="scss" scoped>
	.fileone{
		display: none;
	}
	.avatar{
		width: 63px;
		height: 63px;
		//border: 2px solid #fff;
		border-radius: 50%;
	}
</style>