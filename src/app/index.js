import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import 'services/immutabilityService';
import configureStore from 'configureStore';
import DevTools from 'containers/DevTools';
import Routes from 'containers/Routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Routes history={history} />
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'));
