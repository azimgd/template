const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/app/index',
  ],
  output: {
    path: path.join(__dirname, 'build/webpack'),
    filename: 'bundle.js',
    publicPath: '/build/webpack/',
  },
  aggregateTimeout: 300,
  poll: 1000,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new WriteFilePlugin(),
  ],
  resolve: {
    root: path.join(__dirname, 'src/app'),
    extensions: ['', '.js'],
  },
  stats: {
    colors: true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader/webpack', 'babel'],
      include: path.join(__dirname, 'src'),
    },
    ],
  },
};
