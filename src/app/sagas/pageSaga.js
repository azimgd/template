import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

function* getPagesRequest() {
  try {
    const data = yield call(api.getPages);
    yield put(actions.getPagesSuccess({ data }));
  } catch (e) {
    yield put(actions.getPagesFailure({ errors: { preview: 'Cant generate preview for file' } }));
  }
}

export default [
  fork(takeEvery, constants.GET_PAGES_REQUEST, getPagesRequest),
];
