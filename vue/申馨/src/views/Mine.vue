<template>
    <div>
        <!-- <Head title="个人中心"></Head> -->
        <div class="top">
            <div class="top-content">
                <input type="file" class="fileone" ref="file" @change="upload">
                <img :src="pic" alt="" style="float:left" @click="handelclick" class="tpic">
                <div class="dl" @click="tologin">{{content}}</div>
            </div>
        </div>
        <div class="content">
            <ul>
                <li>
                    <img src="../assets/movie.png" alt="">
                    <div>电影订单</div>
                </li>
                <li>
                    <img src="../assets/shop.png" alt="">
                    <div>商品订单</div>
                </li>
            </ul>
        </div>
        <div class="list">
            <ul>
                <li>
                    <van-icon name="send-gift-o" size="50" color="red" class="van-img"/>
                    <p>卖座票</p>
                </li>
                <li>
                    <van-icon name="bill-o"  size="50" color="yellowgreen"  class="van-img"/>
                    <p>组合红包</p>
                </li>
                <li>
                   <van-icon name="medal-o" size="50" color="orange"  class="van-img"/>
                    <p>余额</p>
                </li>
                <li>
                    <van-icon name="setting-o"  size="50" color="yellowgreen"  class="van-img"/>
                    <p>设置</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {
    animate
} from "@/utils"
import pic from "@/assets/tx.png"
import {
    baseURL
} from "@/utils/axios"
export default {
    mixins:[animate],
    data(){
        return{
            content:"立即登陆",
            pic:pic
        }
    },
    mounted(){
            if(localStorage.users){
                var users=JSON.parse(localStorage.users);
                if(users.tel==localStorage.tel){
                  
                    this.pic=users.path;
                      console.log(this.pic);
                }else{

                }

            }else{

            }
    },
    methods:{
        tologin(){
            this.$router.push({name:"login"})
        },
        handelclick(){
            this.$refs.file.click();
        },
        upload(){
            console.log("上传中....");
            var file=this.$refs.file.files[0];
            console.log(file);
            var data=new FormData();
            data.append("avatar",file);
            this.$axios({
                url:"/vue/uploadimg",
                method:"POST",
                data:data
            }).then(res=>{
                this.pic=res.data.path.replace(/public/,baseURL);
                console.log(this.pic)                
                let users={
                    path:this.pic,
                    tel:localStorage.tel
                }
                localStorage.setItem("users",JSON.stringify(users))
            })
        }
    },
   created(){
        console.log(localStorage.isLogin);
        if(localStorage.isLogin){
            this.content="登录成功"
        }else{
            this.content="立即登录"
        }
    }
}
</script>
<style lang="scss" scoped>
    .top{
        width: 100%;
        height: 200px;
        background: burlywood;
        padding-left: 22px;
        padding-top: 64px;
        box-sizing: border-box;
        background: url(../assets/bg.png);
    }
    .top-content{
        overflow: hidden;
        
    }
    .tpic{
        width: 67px;
        height: 67px;
    }
    .dl{
        font-size: 16px;
        color: white;
        margin-top: 20px;
        margin-left: 100px;
    }
    .content{
        height: 79px;
        width: 100%;
        background:white;
        display: flex;
        justify-content: space-around;
        margin-bottom: 8px;
    }
    .content ul li{
        float: left;
        padding: 30px;
        
    }
     .content ul li img{
         padding-left: 10px;
     }
     .content ul li div{
         color: gray;

     }
     .list ul li{
        height: 49px;
        width: 100%;
        background: white;
        margin-bottom: 1px;
    }
      .van-img{
        float: left;
        padding-left: 15px;
        padding-top: 15px;
    }
    .list ul li p{
        padding-top: 18px;
       margin-left: 50px;
    }
    .fileone{
        display: none;
    }
</style>