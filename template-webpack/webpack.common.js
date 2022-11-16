const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/main.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use:[
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use:['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif|)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins:[new HtmlWebpackPlugin({
    template:"./src/index.html",
  })],
}