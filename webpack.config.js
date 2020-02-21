const path = require('path')
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
	}
}