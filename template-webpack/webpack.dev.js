const common = require('./webpack.common')
const path = require('path');
const { default: merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'build')
  }
});