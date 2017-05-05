const path = require('path');
const express = require('express');
const cons = require('consolidate');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const locations = {
  buildFolder: path.join(__dirname, '../build'),
  viewFolder: path.join(__dirname, 'views'),
};

const globalVariables = {
  API_ENDPOINT: process.env.API_ENDPOINT,
  APP_TITLE: process.env.APP_TITLE,
  APP_CURRENCY: process.env.APP_CURRENCY,
};

module.exports = {
  init: () => {
    const app = express();
    return app;
  },

  templating: (app) => {
    app.engine('html', cons.nunjucks);
    app.set('view engine', 'html');
    app.set('views', locations.viewFolder);
  },

  devServer: (app) => {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
    }));
    app.use(webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
    }));
  },

  run: (app) => {
    app.use('/build', express.static(locations.buildFolder));
    app.get('*', (req, res) => { res.render('index', globalVariables); });
  }
};
