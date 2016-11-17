import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Products
 */
function* getProductsRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProducts.bind(null, payload));
    yield put(actions.getProductsSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductsFailure({ message: 'Cant get products' }));
  }
}

function* getProductRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProduct.bind(null, payload));
    yield put(actions.getProductSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductFailure({ message: 'Cant get products' }));
  }
}

function* postProductRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProduct.bind(null, payload));
    yield put(actions.postProductSuccess({ data, message: 'Product has been created' }));
  } catch (e) {
    yield put(actions.postProductFailure({ message: 'Cant post product' }));
  }
}

export default [
  fork(takeEvery, constants.GET_PRODUCTS_REQUEST, getProductsRequest),
  fork(takeEvery, constants.GET_PRODUCT_REQUEST, getProductRequest),
  fork(takeEvery, constants.POST_PRODUCT_REQUEST, postProductRequest),
];
