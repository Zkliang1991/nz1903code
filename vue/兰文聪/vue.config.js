

module.exports={
	lintOnSave: true,
	devServer:{
		host:"localhost",
		port:8080,
		open:true,
		inline:true,
		proxy:{   // 反向代理  
            "/yun":{
                target:"http://47.104.209.44:3333",
				pathRewrite:{
					"^/yun":""
					} //将/yun 替换为空 即/
            },
			"/vue":{
				target:"http://localhost:3000"
			},
			"/maizuo":{
				target:"https://m.maizuo.com",
				pathRewrite:{
					"^/maizuo":""
				}
			}
        }
	},
	// publicPath:"",  // 项目上线打包   打包启用 
	css:{
        loaderOptions:{
            css:{},
            postcss:{
                plugins:[
                    require("postcss-px2rem-exclude")({
                        remUnit: 37.5,
      					// exclude: "/(node_module)/i"
                    })
                ]
            }
        }
	}
}
