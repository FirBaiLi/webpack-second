const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpakPlugin = require('clean-webpack-plugin');
const config = {
  entry: path.resolve(__dirname, './app.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "js/bundle-[hash].js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new cleanWebpakPlugin(['dist'])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }  // 使用前需要安装 样式加载
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}
module.exports = config;