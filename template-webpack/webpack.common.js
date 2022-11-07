const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'build')
  },
  plugins:[new HtmlWebpackPlugin({
    template:"./src/index.html",

  })],
  module: {
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader', 
          'css-loader'
        ]
      }
    ]
  }
}