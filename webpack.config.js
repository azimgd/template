const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const WebpackPlugins = [
  new WriteFilePlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
  }),
];
const WebpackLoaders = [];
const WebpackEntries = [];
const WebpackDevTool = IS_PRODUCTION ? false : 'cheap-module-eval-source-map';

if (IS_PRODUCTION) {
  /**
   * Plugins
   */
  WebpackPlugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { drop_console: true } }));
  WebpackPlugins.push(new webpack.optimize.OccurrenceOrderPlugin());

  /**
   * Loaders
   */
  WebpackLoaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src'),
  });

  /**
   * Entries
   */
  WebpackEntries.push('./src/app/index');
} else {
  /**
   * Plugins
   */
  WebpackPlugins.push(new webpack.HotModuleReplacementPlugin());
  WebpackPlugins.push(new webpack.optimize.AggressiveMergingPlugin());

  /**
   * Loaders
   */
  WebpackLoaders.push({
    test: /\.js$/,
    loaders: ['react-hot-loader/webpack', 'babel'],
    include: path.join(__dirname, 'src'),
  });

  /**
   * Entries
   */
  WebpackEntries.push('react-hot-loader/patch');
  WebpackEntries.push('webpack/hot/dev-server');
  WebpackEntries.push('webpack-hot-middleware/client');
  WebpackEntries.push('./src/app/index');
}

module.exports = {
  devtool: WebpackDevTool,
  entry: WebpackEntries,
  output: {
    path: path.join(__dirname, 'build/webpack'),
    filename: 'bundle.js',
    publicPath: '/build/webpack/',
  },
  aggregateTimeout: 300,
  poll: 1000,
  plugins: WebpackPlugins,
  resolve: {
    root: path.join(__dirname, 'src/app'),
    extensions: ['', '.js'],
  },
  stats: {
    colors: true,
  },
  module: {
    loaders: WebpackLoaders,
  },
};
