import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Horizon as horizon, HorizonProvider } from 'react-hz';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from 'configureStore';
import DevToolsContainer from 'containers/DevToolsContainer';
import RoutesContainer from 'containers/RoutesContainer';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const horizonInstance = horizon({ host: 'localhost:8181' });

ReactDOM.render((
  <HorizonProvider instance={horizonInstance}>
    <Provider store={store}>
      <div>
        <RoutesContainer history={history} />
        <DevToolsContainer />
      </div>
    </Provider>
  </HorizonProvider>
), document.getElementById('root'));
