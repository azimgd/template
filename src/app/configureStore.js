import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from 'reducers/index';
import rootSagas from 'sagas/index';

export default (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
      autoRehydrate(),
    ),
  );

  persistStore(store, { whitelist: ['loginReducer'] });

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
