const path = require('path');
const express = require('express');
const cons = require('consolidate');

const locations = {
  buildFolder: path.join(__dirname, '../build'),
  viewFolder: path.join(__dirname, 'views'),
};

module.exports = {
  app: () => {
    const app = express();
    const buildPath = express.static(locations.buildFolder);

    app.use('/build', buildPath);
    app.get('*', (_, res) => { res.render('index', { API_ENDPOINT: process.env.API_ENDPOINT }); });

    return app;
  },

  templating: (app) => {
    app.engine('html', cons.nunjucks);
    app.set('view engine', 'html');
    app.set('views', locations.viewFolder);
  },
};
