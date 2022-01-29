const wbepack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: 'build',
          esModule: false,
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['isomorphic-style-loader', 'css-loader',]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.ejs',
      filename: 'index.html',
      inlineSource: '.(js|css)',
    }),
    // new HtmlWebpackInlineSourcePlugin(),
  ]
}
