

// vue-cli 脚手架的配置文件 
// 以后修改这个配置文件  一定要重启服务 才能有用 
module.exports = {
    lintOnSave:false ,   // 处理ESLint 的 error 提示 
    devServer:{
        host:"localhost",  // 0.0.0.0
        port:8080,
        open:true,  // 自动打开浏览器
        inline:true,
        proxy:{   // 反向代理  
            "/yun":{
                target:"http://47.104.209.44:3333",
                pathRewrite:{
                    "^/yun":""
                }
            },
            "/vue":{
                target:"http://60.205.2.231:3000",
            },
            "/maizuo":{
                target:"https://m.maizuo.com",  // 服务器地址  
                pathRewrite:{
                    "^/maizuo":""  // 需要将 /yun 重写为 / 
                }
            },
        }
    },
    publicPath:"",
    css:{
        loaderOptions:{
            css:{},
            postcss:{   // css 代码转化
                plugins:[  // 插件
                    require("postcss-px2rem")({
                        remUnit:37.5   // 自动除以 100 
                    })
                ]
            }
        }
    }
}