const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    // just for development, peer dependencies work when the module isn't linked
    alias: {
      react: require.resolve('react'),
      mobx: require.resolve('mobx'),
      'mobx-react-lite': require.resolve('mobx-react-lite'),
    }
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
          // publicPath: 'build',
          esModule: false,
        }
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, 'css-loader',]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.ejs',
      filename: 'index.html',
      inlineSource: '.(js|css)',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    })
    // new HtmlWebpackInlineSourcePlugin(),
  ],
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
}
