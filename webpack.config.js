const path = require('path')
const fileListPlugin = require('./plugins/fileListPlugin.js')
const logWebpackPlugin = require('./plugins/logWebpackPlugin.js')
module.exports = {
	mode:'development',
	entry:{
		main:'./src/index.js'
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname, 'dist')
	},
	module:{
		rules: [{
			test:/\.js$/,
			use:[
				{
					loader:path.resolve(__dirname, './loaders/replaceLoader.js'),
					options:{
						name:'同步'
					}
				},
				{
					loader:path.resolve(__dirname,'./loaders/replaceLoaderAsync.js'),
					options:{
						name:"异步"
					}
				}

			]
		}]
	},
	plugins:[
		new fileListPlugin(),
		new logWebpackPlugin(()=>{
			// Webpack 模块完成转换成功
			console.log('emit 事件发生啦，所有模块的转换和代码块对应的文件已经生成好~')
		},()=>{
			// Webpack 构建成功，并且文件输出了后会执行到这里，在这里可以做发布文件操作
			console.log('done 事件发生啦，成功构建完成~')
		})

	]
}