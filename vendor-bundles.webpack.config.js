// vendor-bundles.webpack.config.js
const webpack = require('webpack');
const path = require('path');

const WebpackEntries = {
  bundle: ['babel-polyfill'],
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

module.exports = {
  entry: WebpackEntries,

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build/dist'),

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.join(__dirname, 'build/dist', '[name]-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_lib'
    }),
  ],
}
