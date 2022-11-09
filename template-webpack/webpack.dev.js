const common = require('./webpack.common')
const path = require('path');
const { default: merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'build')
  }
});