import axios from "axios";
import {Toast} from "vant";
import router from "../router"
 
//axios设置基路径 
let token='';
const baseURL= "http://localhost:3000";
// const baseURL= "http://182.92.59.111:3000";
// axios.defaults.baseURL=baseURL;
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function showLoading(){
	Toast.clear();
	Toast.loading({
		message: '加载中...',
		forbidClick: true,
		loadingType: 'spinner',
		duration:10000
		});
}
function success(msg){ 
	Toast.clear();
	Toast.success({
		message:msg,
		duration:600
	});
}

function fail(msg){ 
	Toast.clear();
	Toast.fail({
		message:msg,
		duration:600
	});
}

//Interceptors
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 请求发送之前做的事
	token=sessionStorage.token||token;
	config.headers.token=token;
	//console.log(config);
	showLoading();
    return config; 
  }, function (error) {
	//请求失败做的事
	fail("请求失败");
    return Promise.reject(error);
  });
 
//添加响应拦截器
axios.interceptors.response.use(function (response) {
	//响应之前做的事
	console.log(response);
	setTimeout(() => {
		if(response.data.type===1){
			success(response.data.msg||"请求数据成功");
		}else{
			if(response.data.type===0){
				fail(response.data.msg||"请求数据成功");
			}else{
				success(response.data.msg||"请求数据成功");
			}
		}
		if(response.data.code===3000){
			router.push({name:"login"})
		}
	}, 400);
    return response;
  }, function (error) {
	// 响应失败做的事
	fail("响应失败");
    return Promise.reject(error);
  });

export {axios,baseURL}