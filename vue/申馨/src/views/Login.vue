<template>
    <div>
       <Head title="登陆" :show=true :login=true></Head> 
       <van-tabs v-model="active">
        <van-tab title="注册">
             <van-form @submit="registSubmit">
                <van-field 
                v-model="regist.tel" 
                type="tel" 
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
                 />
                <van-field
                    v-model="regist.username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="regist.password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <van-field
                    v-model="regist.dbpwd"
                    type="dbpwd"
                    name="dbpwd"
                    label="确认密码"
                    placeholder="确认密码"
                    :rules="[{ required: true, message: '请确认密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="primary">
                    马上注册
                    </van-button>
                </div>
            </van-form>
        </van-tab>
        <van-tab title="登录">
            <van-form @submit="loginSubmit">
                <van-field 
                v-model="login.tel" 
                type="tel" 
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
                 />
                <van-field
                    v-model="login.password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    登录
                    </van-button>
                </div>
            </van-form>
        </van-tab>
        <van-tab title="验证码登录">
            <van-form @submit="yzSubmit">
                <van-field 
                v-model="tel" 
                type="tel" 
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
                 />
                <van-field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                    >
                    <template #button>
                        <van-button size="small" type="primary" @click="sendSms">发送验证码</van-button>
                    </template>
                </van-field>
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit" @click="checkSms">
                    验证登录
                    </van-button>
                </div>
            </van-form>
        </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
             login:{
                 tel:localStorage.tel
             },
             regist:{

             },
             sms:"",
             tel:""
        }
    },
    methods:{
        checkSms(){
            this.$axios.get("/yun/captcha/verify",{
                params:{
                    phone:this.tel,
                    captcha:this.sms
                }
            }).then(res=>{
                console.log(res);
                if(res.data.code==200){
                    localStorage.tel=this.tel;
                    localStorage.isLogin=true;
                    this.$router.push({name:"mine"})
                }else{
                    localStorage.isLogin=false;
                }
            })
        },
        sendSms(){
            this.$axios.get("/yun/captcha/sent",{
                params:{
                    phone:this.tel
                }
            }).then(res=>{
                console.log(res);
            })
        },
        loginSubmit(loval){
            console.log(loval)
            this.$axios.post("/vue/login",this.login)
            .then(res=>{
                if(res.data.type){
                   localStorage.tel=this.login.tel;
                    localStorage.isLogin=true;
                    this.$router.push({name:"mine"})
                }
            })
        },
        registSubmit(reval){
            console.log(reval);
            this.$axios.post("/vue/register",this.regist)
            .then(res=>{
                if(res.data.type){
                    this.active=1;
                    this.login.tel=this.regist.tel;
                }
            })
        },
        yzSubmit(yzval){
            console.log(yzval)
            
        }
    }
}
</script>