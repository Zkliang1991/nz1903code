
console.log("dsddss")
module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require("postcss-px2rem-exclude")({
                        // 3. 淘宝适配  1rem = 10vw 
                        remUnit:37.5,   // 自动除以 100 
                        // remUnit:100     // 网易适配 
                    })
                ]
            }
        }
    },
    publicPath:".",  // 项目上线打包 
    lintOnSave: false,
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        open: true,
        inline: true,
        proxy: {
            "/yun":{
                target:"http://47.104.209.44:3333/",  // 服务器地址  
                pathRewrite:{
                    "^/yun":""  // 需要将 /yun 重写为 / 
                }
            },
            "/vue":{
                target:"http://101.200.166.98:3000"   //  所有的接口 path 都有  vue  
            },
            "/public":{
                target:"http://101.200.166.98:3000" ,  //  所有的接口 path 都有  vue  
                pathRewrite:{
                    "^/public":""  // 需要将 /yun 重写为 / 
                }
            },
            "/bl": {
                target: "https://api.benlai.com",
                pathRewrite: {
                    "^/bl": ""
                }
            },
        }
    },
}
