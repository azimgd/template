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

const postLoginIdle = (state) => update(state, {
  login: {
    data: { $set: initialState.login.data },
  },
  actions: {
    postLogin: { $setRequestActionIdle: {} },
  },
});

/**
 * Get login
 */
const postLogoutSuccess = (state) => update(state, {
  login: { $set: initialState.login },
  actions: {
    postLogin: { $set: initialState.actions.postLogin },
  },
});

const postLogoutFailure = (state, action) => update(state, {
  actions: {
    postLogout: { $setRequestActionFailure: action.payload },
  },
});

const postLogoutIdle = (state) => update(state, {
  login: {
    data: { $set: initialState.login.data },
  },
});

export default handleActions({
  [constants.POST_LOGIN_SUCCESS]: postLoginSuccess,
  [constants.POST_LOGIN_FAILURE]: postLoginFailure,
  [constants.POST_LOGIN_IDLE]: postLoginIdle,

  [constants.POST_LOGOUT_SUCCESS]: postLogoutSuccess,
  [constants.POST_LOGOUT_FAILURE]: postLogoutFailure,
  [constants.POST_LOGOUT_IDLE]: postLogoutIdle,
}, initialState);
