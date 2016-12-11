import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from 'reducers/index';
import rootSagas from 'sagas/index';
import DevTools from 'containers/DevTools';

export default (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger({ logErrors: false, level: 'error' })),
      applyMiddleware(sagaMiddleware),
      DevTools.instrument()
    )
  );

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
