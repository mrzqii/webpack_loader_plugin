 // 同步代码的编写
 const loaderUtils = require('loader-utils')

 // laoder其实就是一个函数接收一个资源返回处理后的资源
 // 这个资源只能是string或者Buffer
 module.exports = function (source) {
 	const options = loaderUtils.getOptions(this)// 得到loader的option
 	const result = source.replace('world', options.name)
 	// return result 使用this.callback 代替

 	// The second argument is a string or a Buffer
 	this.callback(null, result); // https://webpack.js.org/api/loaders/#thiscallback
 }