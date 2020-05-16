import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path:"/",
		redirect:"/guide"
	},
	{
		path:"/guide",
		name:"guide",
		component:()=>import ("@/views/Guide.vue")
	},
	{
		path:"/main",
		component:()=>import ("@/views/Main.vue"),
		children:[
			{
				path:"/",
				redirect:{name:"movie"}
			},
			{
				path:"movie",
				name:"movie",
				component:()=>import ("@/views/Movie.vue")
			},
			{
				path:"cinema",
				name:"cinema",
				component:()=>import ("@/views/Cinema.vue")
			},
			{
				path:"news",
				name:"news",
				component:()=>import ("@/views/News.vue")
			},
			{
				path:"mine",
				name:"mine",
				component:()=>import ("@/views/Mine.vue")
			}
		]
	},
	{
		path:"/search",
		name:"search",
		component:()=>import ("@/views/Search.vue")
	},
	{
		path:"/city",
		name:"city",
		component:()=>import ("@/views/City.vue")
	},
	{
		path:"/login",
		name:"login",
		component:()=>import ("@/views/Login.vue")
	},
	{
		path:"/register",
		name:"register",
		component:()=>import ("@/views/Register.vue")
	},
	{
		path:"/404",
		name:"404",
		component:()=>import ("@/views/404.vue")
	},
	{
		path:"*",
		redirect:{name:"404"}
	},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
