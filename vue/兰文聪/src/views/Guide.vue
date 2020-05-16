<template>
	<div class="box guide">
		<van-swipe 
		class="my-swipe" :autoplay="3000" 
		:show-indicators="false"
		:loop="false"
		>
		<van-swipe-item
		v-for="(img,i) in imgs" :key="i"
		@click="gotomine(i)"
		>
			<img :src="img" alt="">
		</van-swipe-item>
		</van-swipe>
	</div>
</template>


<script>
import img1 from "@/assets/images/slide1.png"
import img2 from "@/assets/images/slide2.png"
import img3 from "@/assets/images/slide3.png"
import img4 from "@/assets/images/slide4.png"
export default {
	data(){
		return {
			imgs:[img1,img2,img3,img4],
		}
	},
	methods: {
		gotomine(i){
			if(i===this.imgs.length-1){
				this.$router.push({name:"movie"})
			}
		}
	},
	mounted(){
		if(localStorage.visitCount){
			localStorage.visitCount++;
			if(localStorage.visitCount>2){
				this.$router.push({name:"movie"})
			}
		}else{
			localStorage.visitCount=1
		}
	}
}
</script>

<style lang="scss" scoped>
.guide{
	.my-swipe{
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>