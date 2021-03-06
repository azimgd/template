import { call, put, fork, takeLatest } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Product options
 */
function* getProductOptionsRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductOptions.bind(null, payload));
    yield put(actions.getProductOptionsSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductOptionsFailure({ message: 'Cant get products' }));
  }
}


function* getDistinctProductOptionsRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getDistinctProductOptions.bind(null, payload));
    yield put(actions.getDistinctProductOptionsSuccess({ data }));
  } catch (e) {
    yield put(actions.getDistinctProductOptionsFailure({ message: 'Cant get products' }));
  }
}

function* getProductOptionRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductOption.bind(null, payload));
    yield put(actions.getProductOptionSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductOptionFailure({ message: 'Cant get products' }));
  }
}

function* postProductOptionRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProductOption.bind(null, payload));
    yield put(actions.postProductOptionSuccess({ data, message: 'Product option has been created' }));
  } catch (e) {
    yield put(actions.postProductOptionFailure({ message: 'Cant post product' }));
  }
}

export default [
  fork(takeLatest, constants.GET_PRODUCT_OPTIONS_REQUEST, getProductOptionsRequest),
  fork(takeLatest, constants.GET_DISTINCT_PRODUCT_OPTIONS_REQUEST, getDistinctProductOptionsRequest),
  fork(takeLatest, constants.GET_PRODUCT_OPTION_REQUEST, getProductOptionRequest),
  fork(takeLatest, constants.POST_PRODUCT_OPTION_REQUEST, postProductOptionRequest),
];
