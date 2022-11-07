const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader', 
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use:['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins:[new HtmlWebpackPlugin({
    template:"./src/index.html",
  })],
}