import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { HorizonProvider } from 'react-hz';
import { syncHistoryWithStore } from 'react-router-redux';

import configureHorizon from 'configureHorizon';
import configureStore from 'configureStore';
import DevToolsContainer from 'containers/DevToolsContainer';
import RoutesContainer from 'containers/RoutesContainer';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <HorizonProvider instance={configureHorizon}>
    <Provider store={store}>
      <div>
        <RoutesContainer history={history} />
        <DevToolsContainer />
      </div>
    </Provider>
  </HorizonProvider>
), document.getElementById('root'));
