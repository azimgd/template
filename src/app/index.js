import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Horizon as horizon, HorizonProvider } from 'react-hz';
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';

import rootReducer from 'reducers/index';
import DevToolsContainer from 'containers/DevToolsContainer';
import LayoutContainer from 'containers/LayoutContainer';
import LoginContainer from 'containers/LoginContainer';
import HomeContainer from 'containers/HomeContainer';
import ProductsContainer from 'containers/ProductsContainer';
import ProductViewContainer from 'containers/ProductViewContainer';
import ProductFormContainer from 'containers/ProductFormContainer';
import CheckoutContainer from 'containers/CheckoutContainer';
import NotFoundContainer from 'containers/NotFoundContainer';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger()),
      DevToolsContainer.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers/index', () => {
      const nextRootReducer = require('reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const horizonInstance = horizon({ host: 'localhost:8181' });

const Routes = () =>
  <Router history={history}>
    <Route path="/login" component={LoginContainer} />
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path="/form" component={ProductFormContainer} />
      <Route path="/products">
        <IndexRoute component={ProductsContainer} />
        <Route path=":id" component={ProductViewContainer} />
      </Route>
      <Route path="/checkout" component={CheckoutContainer} />
      <Route path="/404" component={NotFoundContainer} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>;

ReactDOM.render((
  <HorizonProvider instance={horizonInstance}>
    <Provider store={store}>
      <div>
        <Routes />
        <DevToolsContainer />
      </div>
    </Provider>
  </HorizonProvider>
), document.getElementById('root'));
