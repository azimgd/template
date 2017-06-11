import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  login: {
    data: [],
  },
  actions: {
    postLogin: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get login
 */
const postLoginSuccess = (state, action) => update(state, {
  login: {
    data: { $set: action.payload.data },
  },
  actions: {
    postLogin: { $setRequestActionSuccess: action.payload },
  },
});

const postLoginFailure = (state, action) => update(state, {
  actions: {
    postLogin: { $setRequestActionFailure: action.payload },
  },
});

const postLoginIdle = (state, action) => update(state, {
  login: {
    data: { $set: initialState.login.data },
  },
  actions: {
    postLogin: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.POST_LOGIN_SUCCESS]: postLoginSuccess,
  [constants.POST_LOGIN_FAILURE]: postLoginFailure,
  [constants.POST_LOGIN_IDLE]: postLoginIdle,
}, initialState);
