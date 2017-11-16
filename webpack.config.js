require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const getLocalIdent = require('./webpack/getLocalIdent');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const cssLocalIdentityName = IS_PRODUCTION ? '[name]__[local][hash:base64:5]' : '[path]___[name]__[local]___[hash:base64:5]';
const sassGlobalStyleInclude = `\
  @import "${path.join(__dirname, 'src/assets/scss/_webpack.scss')}";
`;

/**
 * Styling
 */
const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css',
});

const WebpackPlugins = [
  new WriteFilePlugin({
    test: /^(?!.*(hot)).*/,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
  }),
  extractSass,
];

const WebpackLoaders = [];
const WebpackEntries = {
  polyfill: ['babel-polyfill'],
  bundle: [],
  vendor: [
    'axios',
    'classnames',
    'immutability-helper',
    'lodash',
    'marked',
    'react',
    'react-css-modules',
    'react-dom',
    'react-image-slider',
    'react-redux',
    'react-router-dom',
    'react-router-redux',
    'react-s3-uploader',
    'redux',
    'redux-actions',
    'redux-form',
    'redux-persist',
    'redux-saga',
    'reselect',
    'yup',
  ],
};
const WebpackDevTool = IS_PRODUCTION ? false : 'cheap-module-eval-source-map';

if (IS_PRODUCTION) {
  /**
   * Plugins
   */
  WebpackPlugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { drop_console: true } }));
  WebpackPlugins.push(new webpack.optimize.AggressiveMergingPlugin());
  WebpackPlugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[name].js',
    minChunks: Infinity,
  }));
  WebpackPlugins.push(new AssetsPlugin({
    path: path.join(__dirname, 'build/webpack'),
    filename: 'assets.json',
    prettyPrint: true,
  }));

  /**
   * Loaders
   */
  WebpackLoaders.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.join(__dirname, 'src/app'),
      path.join(__dirname, 'src/template'),
    ],
    exclude: /node_modules/,
  });

  /**
   * Entries
   */
  WebpackEntries.bundle.push('./src/app/index');
} else {
  /**
   * Plugins
   */
  WebpackPlugins.push(new webpack.HotModuleReplacementPlugin());

  /**
   * Loaders
   */
  WebpackLoaders.push({
    test: /\.js$/,
    loaders: ['react-hot-loader/webpack', 'babel-loader'],
    include: [
      path.join(__dirname, 'src/app'),
      path.join(__dirname, 'src/template'),
    ],
    exclude: /node_modules/,
  });

  /**
   * Entries
   */
  WebpackEntries.bundle.push('react-hot-loader/patch');
  WebpackEntries.bundle.push('webpack/hot/dev-server');
  WebpackEntries.bundle.push('webpack-hot-middleware/client');
  WebpackEntries.bundle.push('./src/app/index');
}

module.exports = {
  devtool: WebpackDevTool,
  entry: WebpackEntries,
  output: {
    filename: IS_PRODUCTION ? '[name].js' : '[name].js',
    path: path.join(__dirname, 'build/webpack'),
    publicPath: '/build/webpack/',
    library: '[name]',
  },
  plugins: WebpackPlugins,
  resolve: {
    modules: [
      path.join(__dirname, 'src/app'),
      path.join(__dirname, 'src/assets'),
      path.join(__dirname, `src/template/${process.env.TEMPLATE}`),
      'node_modules',
    ],
    alias: {
      template: path.join(__dirname, `src/template/${process.env.TEMPLATE}`),
    },
    extensions: ['.js', '.css', '.scss'],
  },
  stats: {
    colors: true,
  },
  module: {
    rules: [
      ...WebpackLoaders,
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: IS_PRODUCTION ? 'http://cars.dvg.com.au/build/webpack/' : '/build/webpack/',
          name: 'images/[hash].[ext]'
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: !IS_PRODUCTION,
              modules: true,
              localIdentName: cssLocalIdentityName,
              getLocalIdent,
              discardComments: {
                removeAll: true
              },
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
              outputStyle: IS_PRODUCTION ? 'compressed' : 'nested',
              data: sassGlobalStyleInclude,
              includePaths: [path.join(__dirname, 'src/assets')],
            },
          }],
          fallback: 'style-loader',
        })
      }
    ],
  },
};
