import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'services/immutabilityService';
import { authorizationProvider } from 'services/authorizationService';
import configureStore from 'configureStore';
import Routes from 'template/Routes';
import 'scss/index.scss';

const store = configureStore();
authorizationProvider(store);

const history = createHistory();

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes history={history} />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
