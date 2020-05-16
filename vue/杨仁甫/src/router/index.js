
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/main/shouye"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/Main.vue"),
    redirect: '/main/shouye',
    children: [
      {
        path: "shouye",
        name: "shouye",
        component: () => import("@/views/Shouye.vue"),
      },
      {
        path: "fenlei",
        name: "fenlei",
        component: () => import("@/views/Fenlei.vue"),
      },
      {
        path: "chike",
        name: "chike",
        component: () => import("@/views/Chike.vue"),
        redirect: '/main/chike/43',
        children:[
          {
            path:"43",
            name:"43",
            component: () => import("@/views/43.vue"),
          },
          {
            path:"2419",
            name:"2419",
            component: () => import("@/views/2419.vue"),
          }
        ]
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("@/views/Cart.vue"),
      },
      {
        path: "mine",
        name: "mine",
        component: () => import("@/views/Mine.vue"),
      }

    ]
  },
  {
    path: "/city",
    name: "city",
    component: () => import("@/views/City.vue"),
  },

]

const router = new VueRouter({
  routes,
  // mode: 'history',
  
})
router.beforeEach((to, from, next) => {
  document.getElementsByClassName('box').className = "box enter";
  next();
})
export default router
