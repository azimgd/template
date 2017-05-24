import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Pages
 */
function* getPagesRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getPages.bind(null, payload));
    yield put(actions.getPagesSuccess({ data }));
  } catch (e) {
    yield put(actions.getPagesFailure({ message: 'Cant get pages' }));
  }
}

function* getPageRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getPage.bind(null, payload));
    yield put(actions.getPageSuccess({ data }));
  } catch (e) {
    yield put(actions.getPageFailure({ message: 'Cant get pages' }));
  }
}

function* postPageRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postPage.bind(null, payload));
    yield put(actions.postPageSuccess({ data, message: 'Page has been created' }));
  } catch (e) {
    yield put(actions.postPageFailure({ message: 'Cant post page' }));
  }
}

export default [
  fork(takeLatest, constants.GET_PAGES_REQUEST, getPagesRequest),
  fork(takeLatest, constants.GET_PAGE_REQUEST, getPageRequest),
  fork(takeLatest, constants.POST_PAGE_REQUEST, postPageRequest),
];
