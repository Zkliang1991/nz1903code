// 路由配置 
import Vue from "vue"
import VueRouter from "vue-router"

// 0 模块化 全局注册使用 VueRouter
Vue.use(VueRouter)

// 1. 路由组件选项
// import Home from "@/views/Home.vue"

// 2. 定义路由信息 定义组件的映射关系 
const routes = [
    {
        path:"/",
        redirect:"/guide"
    },
    {
        path:"/guide",
        name:'guide',
        component:()=>import("@/views/Guide.vue")
    },
    {
        path:"/main",
        component:()=>import("@/views/Main.vue"),
        redirect:'/main/movie',
        children:[
            {
                path:"movie",
                name:"movie",
                component:()=>import("@/views/Movie.vue"),
            },
            {
                path:"cinema",
                name:"cinema",
                component:()=>import("@/views/Cinema.vue"),
            },
            {
                path:"news",
                name:"news",
                component:()=>import("@/views/News.vue"),
            },
            {
                path:"shop",
                name:"shop",
                component:()=>import("@/views/Shop.vue"),
            },
            {
                path:"mine",
                name:"mine",
                component:()=>import("@/views/Mine.vue"),
            }
        ]
    },
    {
        path:"/search",
        name:"search",
        component:()=>import("@/views/Search.vue"),
    },
    {
        path:"/login",
        name:"login",
        component:()=>import("@/views/Login.vue"),
    },
    {
        path:"/city",
        name:"city",
        component:()=>import("@/views/City.vue"),
    },
    {
        path:"/yydetail/:cinemaId",
        name:"yydetail",
        component:()=>import("@/views/Yydetail.vue"),
    },
    {
        path:"/films/:filmId",
        name:"films",
        component:()=>import("@/views/Films.vue"),
    },
    {
        path:"/404",
        name:"404",
        component:()=>import("@/views/404.vue"),
    },
    {
        path:"*",
        redirect:{name:"404"}
    }
]

// 3. 创建路由实例对象 
const router = new VueRouter({
    routes,
    // mode:"history"   
})


// 路由进入之前
router.beforeEach((to,from,next)=>{
    document.getElementsByClassName('box').className = "box enter";
    next();
})


// router.push("/").catch(err=>{
//     console.log("路由错误 -- " + err);
// })

// 4 挂载 暴露之后再去挂载 
export default router;


















// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')