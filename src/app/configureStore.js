import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from 'reducers/index';
import DevToolsContainer from 'containers/DevToolsContainer';

export default (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger({ logErrors: false, level: 'error' })),
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
