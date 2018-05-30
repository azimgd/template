import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from 'reducers/index';
import rootSagas from 'sagas/index';

const analytics = () => next => action => {
  if (window.dataLayer && window.dataLayer instanceof Array) {
    window.dataLayer.push({
      event: action.type,
      actionType: action.type,
      payload: action.payload
    });
  }
  return next(action);
};


export default (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers(reducers),
    undefined,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, analytics),
      autoRehydrate(),
    ),
  );

  persistStore(store, { whitelist: ['loginReducer'] });

  store.dispatch({
    type: 'SET_GLOBAL_APP_STATE',
    payload: preloadedState,
  });

  sagaMiddleware.run(rootSagas);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers/index', () => {
      const nextRootReducer = require('reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
