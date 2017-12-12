import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Login
 */
function* postLoginRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postLogin.bind(null, payload));
    yield put(actions.postLoginSuccess({ data, message: 'User has been authorized' }));
  } catch (e) {
    yield put(actions.postLoginFailure({ message: 'Cant login' }));
  }
}

/**
 * Logout
 */
function* postLogoutRequest() {
  try {
    yield put(actions.postLogoutSuccess({ data: {}, message: 'User has been loggout out' }));
    window.location = BASE_PATH;
  } catch (e) {
    yield put(actions.postLogoutFailure({ message: 'Cant login' }));
  }
}

export default [
  fork(takeLatest, constants.POST_LOGIN_REQUEST, postLoginRequest),
  fork(takeLatest, constants.POST_LOGOUT_REQUEST, postLogoutRequest),
];
