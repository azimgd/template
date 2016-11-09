import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Products
 */
function* getProductsRequest() {
  try {
    const data = yield call(api.getProducts);
    yield put(actions.getProductsSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductsFailure({ errors: { preview: 'Cant get products' } }));
  }
}

function* getProductRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProduct.bind(null, payload));
    yield put(actions.getProductSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductFailure({ errors: { preview: 'Cant get products' } }));
  }
}

function* postProductRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProduct.bind(null, payload));
    yield put(actions.postProductSuccess({ data }));
  } catch (e) {
    yield put(actions.postProductFailure({ errors: { preview: 'Cant post product' } }));
  }
}

export default [
  fork(takeEvery, constants.GET_PRODUCTS_REQUEST, getProductsRequest),
  fork(takeEvery, constants.GET_PRODUCT_REQUEST, getProductRequest),
  fork(takeEvery, constants.POST_PRODUCT_REQUEST, postProductRequest),
];
