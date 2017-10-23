import get from 'lodash/get';
import update from 'immutability-helper';
import { browserHistory } from 'react-router-dom';
import requestProvider from 'api/requestProvider';

const addAuthorizationToHeaders = (state, config) => {
  const userToken = get(state, 'loginReducer.login.data.token', null);

  if (!userToken) {
    return config;
  }

  return update(config, {
    headers: {
      Authorization: { $set: `Bearer ${userToken}` },
    },
  });
};

export const authorizationProvider = (store) => {
  requestProvider.interceptors.request.use(config => {
    const state = store.getState(store);
    return addAuthorizationToHeaders(state, config);
  });

  requestProvider.interceptors.response.use(null, error => {
    if (error.response.status === 403) {
      browserHistory.push('/logout');
    }
    return Promise.reject(error.response || { data: { message: 'Conntectivity issues' } });
  });
};

export default {};
