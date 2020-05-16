export var foots = [
    {txt:"首页",name:"shouye",path:"/shouye",icon:"&#xe717;"},
    {txt:"分类",name:"fenlei",path:"/fenlei",icon:"&#xe8c0;"},
    {txt:"吃客",name:"chike",path:"/chike",icon:"&#xe61a;"},
    {txt:"购物车",name:"cart",path:"/cart",icon:"&#xe617;"},
    {txt:"我的本来",name:"mine",path:"/mine",icon:"&#xe619;"},
]


// 封装的混入的对象 组件选项  (data props created mounted computed methods watch ...)
export const myMixin = {
    data(){
        return {
            mobile:localStorage.mobile||"",
            count:1903520,
            city:{}
        }
    },
    created(){
        if(localStorage.city){
            var city = JSON.parse(localStorage.city);
            console.log(city);
            this.city = city;
        }else{
            this.$router.push({name:"city"})
        }
    },
    mounted(){
        
    },
    filters:{

    },
    computed:{
        
    }
}

// 混入动画  
export const animate = {
    data(){
        return {
            animateClass:"enter"
        }
    },
    beforeRouteEnter(to,from,next){
        // console.log("beforeRouteEnter")
        // this 取不到  
        // 路由进入之前  组件实例还未获取到  所以这里不要使用 this 
        next();
    },
    beforeRouteLeave(to,from,next){
        // console.log("beforeRouteLeave");
        this.animateClass = "leave";
        setTimeout(()=>{
            next();
        },400)
    }
}