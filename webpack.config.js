require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
const WebpackEntries = [];
const WebpackDevTool = IS_PRODUCTION ? false : 'cheap-module-eval-source-map';

if (IS_PRODUCTION) {
  /**
   * Plugins
   */
  WebpackPlugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { drop_console: true } }));
  WebpackPlugins.push(new webpack.optimize.AggressiveMergingPlugin());

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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: !IS_PRODUCTION,
              modules: true,
              localIdentName: cssLocalIdentityName,
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
