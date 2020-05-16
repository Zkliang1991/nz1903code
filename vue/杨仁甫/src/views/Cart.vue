<template>
    <div>
        <Head title="购物车"></Head>
         <table>
            <thead>
                <tr>
                    <td>序号</td>
                    <td>选中</td>
                    <td>描述</td>
                    <td>名称</td>
                    <td>单价</td>
                    <td>数量</td>
                    <td>小计</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(g,i) in goods" :key="i">
                    <td>{{i+1}}</td>
                    <td><input type="checkbox" v-model="g.check" ></td>
                    <td><img src="http://placehold.it/60x60" alt=""></td>
                    <td>{{g.title}}</td>
                    <td>{{g.price}}</td>
                    <td><input type="number" v-model.number="g.count"></td>
                    <td>{{ g.price * g.count  }}</td>
                    <td><button @click="goods.splice(i,1)" > 删除 </button></td>
                </tr>
            </tbody>
        </table>
       
        <div>
            <p>总价 : {{ all }}</p>
            <p>选中数量 : {{ selectNum  }}</p>
            <p>总数量 : {{ num }}</p>
            <input type="checkbox" id="checkall" v-model="quan"> 
            <label for="checkall">全选反选</label>
            <button @click="deleteCheck"  >删除选中</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            goods:[
                    {check:false,title:"上衣",price:200,count:10},
                    {check:true,title:"裤子",price:100,count:10},
                    {check:false,title:"鞋子",price:500,count:10},
                    {check:false,title:"风衣",price:1000,count:10},
                    {check:true,title:"帽子",price:300,count:10},
                    {check:true,title:"西服",price:2000,count:10},
                ],
                num:0,   // 总数量
                selectNum: 0, // 选中数量 
                all:0  // 总价 
        }
    },
    methods:{
                deleteCheck(){
                    // 语法杜绝  
                    // " "   ''    编程规范  以后去公司会有要求   
                    // filter  过滤  true 留下来  false 删除 
                    // this.goods = this.goods.filter(item=>{
                    //     return !item.check;  // 把没有选择的 留下来 
                    // });
                    var arr = [];
                    for(var i=0;i<this.goods.length;i++){
                        if(!this.goods[i].check){
                            arr.push(this.goods[i]);
                        }
                    }
                    this.goods = arr;

                }
            },
            computed:{
                quan:{
                    get(){
                        var flag = true;  // 假设全部选中
                        this.goods.forEach(item=>{
                            if(!item.check){
                                flag = false;
                            }
                        })
                        return flag;
                    },
                    set(newVal){  // v-model 绑定计算属性 必须写明 set 函数
                        console.log(newVal);  // 主动修改 全选反选
                        // map   映射  返回新数组  必须  return 
                        // forEach for 循环 循环数组 
                        this.goods = this.goods.map((item)=>{  // map ? forEach
                            item.check = newVal;
                            return item;
                        });
                    }
                },
                total:function(){   // 计算总价
                    var totalnum = 0 ;
                    this.goods.forEach((item)=>{
                        if(item.check){
                            totalnum += item.price * item.count * 1 ;
                        }
                    })
                    return totalnum;
                },
                carNum(){   // 购物车商品数量
                    var num = 0;
                    this.goods.forEach((item)=>{
                        num+=item.count * 1;
                    });
                    return num;
                },
                checkNum(){  // 购物车选中数量
                    var n = 0;
                    this.goods.forEach(item=>{
                        if(item.check){
                            n+=item.count * 1;
                        }
                    });
                    return n;
                }
            },
            watch:{  // vue 深度监听
                goods:{
                    deep:true,   // 深度监听 
                    handler(newVal){  // handler 官方定义好的  
                        console.log(newVal);  // this.goods
                        this.num = 0;
                        this.selectNum = 0;
                        this.all = 0;
                        newVal.forEach(item=>{
                            this.num += item.count *1;
                            if(item.check){
                                this.selectNum += item.count*1;
                                this.all += item.price * item.count * 1;
                            }
                        })
                    }
                }
                // goods(newVal){
                //     console.log(newVal);
                // }
            },
            mounted(){
                document.querySelector("title").innerHTML = this.title;
                // 初始化计算 
                this.goods.forEach((item)=>{
                    this.num += item.count *1;
                    if(item.check){
                        this.selectNum += item.count*1;
                        this.all += item.price * item.count * 1;
                    }
                })
            }
}
</script>