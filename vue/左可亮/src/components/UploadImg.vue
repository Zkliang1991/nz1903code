<template>
    <div>
        <input type="file" class="fileone" ref="file" @change="uploadFile" >
        <img :src="pic" alt="" class="avatar" @click="handleClick">
    </div>
</template>

<script>
import pic from  "@/assets/images/photo.png"
import {
    baseURL
} from "@/utils/axios"
export default {
    data(){
        return {
            pic:pic 
        }
    },
    mounted(){
        // 判断本地存储  有没有头像 
        // 如果有 判断手机号是否一样 
        // 如果手机号一样 直接获取本地的  
        // 如果手机号不一样  就再获取数据库  
        if(localStorage.users){  
            var users = JSON.parse(localStorage.users);
            if(users.mobile==localStorage.mobile){
                this.pic = users.path;   // 没有请求ajax 
            }else{
                this.getAvatar();
            }
        }else{
            this.getAvatar();
        }
    },
    methods:{
        getAvatar(){  // 默认的请求数据库头像 
            this.$axios.post("/vue/getavatar")
            .then(res=>{
                if(res.data.type){
                    this.pic = res.data.result.avatar.replace(/public/,baseURL)
                }else{
                    this.pic = pic;  // 最后使用 本地默认的统一头像 
                }
            })
        },
        handleClick(){
            this.$refs.file.click();
        },
        uploadFile(){
            var file = this.$refs.file.files[0]; // input 上传 可以上传多个文件 
            var data = new FormData(); //FormData 内置对象  实例化一个表单对象  (appliaction/formdata)
            // data  对象   data.username = username 
            // data.mobile = mobile ;
            
            data.append("avatar",file); // 配置 key  为  avatar
            console.log(data)
            // 头像上传
            this.$axios({
                url:"/vue/uploadimg",  // 接口后台开发的 
                method:"POST",
                data:data
            }).then(res=>{
                this.pic = res.data.path.replace(/public/,baseURL);  // 方法1 
                // this.pic = '/' +  res.data.path;
                let users = {
                    path:this.pic,
                    mobile:res.data.mobile
                }
                localStorage.setItem("users",JSON.stringify(users));  // 存储头像 
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.fileone{
    display: none;
}
.avatar{
    width:120px;
    height:120px;
    border-radius: 50%;
}
</style>
