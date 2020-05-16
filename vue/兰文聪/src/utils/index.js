export var foots = [
    {txt:"电影",name:"movie",path:"/main/movie",icon:"&#xe717;"},
    {txt:"影院",name:"cinema",path:"/main/cinema",icon:"&#xe8c0;"},
    {txt:"资讯",name:"news",path:"/main/news",icon:"&#xe61a;"},
    {txt:"我的",name:"mine",path:"/main/mine",icon:"&#xe619;"},
]


export const mymixin={
	data(){
 		return{
			city:{}
		}
	},
	created() {
		if(localStorage.city){
			this.city=JSON.parse(localStorage.city);
			
		}else{
			this.$router.push({name:"city"})
		}
	},
	mounted() {
		
	}
}

export const animate={
	data(){
		return {
			animateClass:"enter"
		}
	},
	beforeRouteLeave (to, from, next) {
		this.animateClass="leave";
		setTimeout(() => {
			next()
		}, 400);
	}
	
}