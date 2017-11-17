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

window.initApplication = (selector, appConfig) => {
  const store = configureStore(appConfig);

  authorizationProvider(store);

  const history = createHistory({
    basename: BASE_PATH,
  });

  ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes history={history} />
      </ConnectedRouter>
    </Provider>
  ), selector);
};
