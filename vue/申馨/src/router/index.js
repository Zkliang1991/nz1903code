import Vue from 'vue'
import VueRouter from 'vue-router'

// 0.模块化 全局注册使用 导入VueRouter
Vue.use(VueRouter)

//1.路由组件选项
// import Home from '../views/Home.vue'

// 2.定义路由信息 定义组建的映射关系
const routes = [
    {
      path:"/",
      redirect:"/main/movie"
    },
    {
      path:"/guide",
      name:"guide",
      component:()=>import("@/views/Guide.vue")
    },
    {
      path:"/main",
      // name:"main",
      component:()=>import("@/views/Main.vue"),
      redirect:"/main/movie",
      children:[
            {
              path:"movie",
              name:"movie",
              component:()=>import("@/views/Movie.vue")
            },
            {
              path:"cinema",
              name:"cinema",
              component:()=>import("@/views/Cinema.vue")
            },
            {
              path:"news",
              name:"news",
              component:()=>import("@/views/News.vue")
            },
            // {
            //   path:"shop",
            //   name:"shop",
            //   component:()=>import("@/views/Shop.vue")
            // },
            {
              path:"mine",
              name:"mine",
              component:()=>import("@/views/Mine.vue")
            }
      ]
    },
    {
      path:"/search",
      name:"search",
      component:()=>import("@/views/Search.vue")
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("@/views/Login.vue")
    },
    {
      path:"/city",
      name:"city",
      component:()=>import("@/views/City.vue")
    },
    {
      path:"/yydetail/:cinemaId",
      name:"yydetail",
      component:()=>import("@/views/Yydetail.vue")
    },
    {
      path:"/mvdetail/:filmId",
      name:"mvdetail",
      component:()=>import("@/views/Mvdetail.vue")
    },
    {
      path:"/goup/:filmId",
      name:"goup",
      component:()=>import("@/views/Goup.vue")
    },
    {
      path:"/404",
      name:"404",
      component:()=>import("@/views/404.vue")
    },
    {
      path:"*",
      redirect:"/404"
    },
]


//3.创建路由实例对象
const router = new VueRouter({
  routes,
  // mode: 'history',
  // base: process.env.BASE_URL
})

// 4.暴露之后挂载
export default router
