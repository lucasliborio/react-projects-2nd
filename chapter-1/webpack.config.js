const path = require("path");
const HtmlWebpackPuglin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['styles-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      "@": path.join(__dirname, 'src')
    }
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: "./dist",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPuglin({
      template: './public/index.html',
      filename: './index.html'
    }),
  ]
};