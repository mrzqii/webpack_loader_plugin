 // 异步任务代码的编写
 const loaderUtils = require('loader-utils')
 module.exports = function (source) {
 	const options = loaderUtils.getOptions(this)
 	const callback = this.async()//  返回的是this.callback
 	setTimeout(function () {
 		const result = source.replace('hello', options.name);
    	callback(null, result)
 	},1000)
 }