<template>
    <div class="box">
        <Head title="当前城市" :show='true'></Head>
            <van-notice-bar text="通知内容：七月的风懒懒的 连云都变热热的 不久后天闷闷的 一阵云后雨下过" left-icon="volume-o" />
        <van-index-bar :index-list="pylist">
            <div v-for="(py,i) in pylist" :key="i">
                <van-index-anchor :index="py" />
                    <van-cell 
                    v-for="(item,index) in citylist.filter(item=>item.pinyin.indexOf(py.toLowerCase())=='0')"
                    :key="index"
                    :title="item.name" 
                    @click="selectcity(item)"
                    />
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            citylist:[],
            pylist: [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                // "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                // "U",
                // "V",
                "W",
                "X",
                "Y",
                "Z"
            ]
        }
    },
    mounted(){
        Toast.loading({
        message: '加载中...',
        forbidClick: true,
        });
        this.$axios({
            url:"https://m.maizuo.com/gateway?k=493311",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586344314622770258374"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            Toast.clear();
            console.log(res)
            this.citylist=res.data.data.cities;
            // console.log(this.citylist)
            Toast.success("请求信息成功")
        })
    },
    methods:{
        selectcity(item){
            console.log(item);
            localStorage.setItem("city",JSON.stringify(item));
            this.$router.push({name:'movie'});
        }
    }
}
</script>