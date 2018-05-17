#### 简单的webpack配置
*  webpack.config.js配置
	* entry：设置入口=》文件打包的起始位置
	* output：设置出口文件=》打包后的输出位置
	* plugins：设置页面加载的模板、分离插件等
	* modules：设置在使用除js文件外其他文件时的编译模板
* .babelrc文件
	* 配置将es6的语法转换为普通js语法
* package.json
	* 设置打包命令
	* 设置启动命令
	* 安装所需包

---
* 使用less文件时，除了安装less-loader，还要安装less