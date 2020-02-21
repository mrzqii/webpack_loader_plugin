### loader的主要要素

1.  const loaderUtils = require('loader-utils') 
2. 创建loader函数，参数是资源内容（字符串或者buffer）
3. 对传入的资源进行转换
4. 调用this.callback(null, source) 将资源返回以供其他loader使用

### plugin的主要要素

插件是由一个构造函数（此构造函数上的 prototype 对象具有 `apply` 方法）的所实例化出来的。这个 `apply` 方法在安装插件时，会被 webpack compiler 调用一次。`apply` 方法可以接收一个 webpack compiler 对象的引用，从而可以在回调函数中访问到 compiler 对象。

**Compiler对象**

Compiler 对象包含了Webpack环境所有的配置信息，包含options，loaders, plugins这些项，这个对象在webpack启动时候被实例化，它是全局唯一的。我们可以把它理解为webpack的实列。



**compilation 对象**

compilation 对象包含了当前的模块资源、编译生成资源、文件的变化等。当webpack在开发模式下运行时，每当检测到一个文件发生改变的时候，那么一次新的 Compilation将会被创建。从而生成一组新的编译资源。

Compiler对象 与 Compilation 对象 的区别是：Compiler代表了是整个webpack从启动到关闭的生命周期。Compilation 对象只代表了一次新的编译。





https://www.cnblogs.com/tugenhua0707/p/11332463.html

https://webpack.docschina.org/contribute/writing-a-plugin/

https://webpack.docschina.org/api/compiler-hooks/#emit