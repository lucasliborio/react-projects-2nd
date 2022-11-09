const common = require('./webpack.common')
const path = require('path');
const { default: merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/img/[name].[hash].[ext]' //path created on build folder
  },
  plugins:[new CleanWebpackPlugin()]
})