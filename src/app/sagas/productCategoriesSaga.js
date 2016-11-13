import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Product categories
 */
function* getProductCategoriesRequest() {
  try {
    const data = yield call(api.getProductCategories);
    yield put(actions.getProductCategoriesSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductCategoriesFailure({ message: 'Cant get products' }));
  }
}

function* getProductCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductCategory.bind(null, payload));
    yield put(actions.getProductCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.getProductCategoryFailure({ message: 'Cant get products' }));
  }
}

function* postProductCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProductCategory.bind(null, payload));
    yield put(actions.postProductCategorySuccess({ data, message: 'Product category has been created' }));
  } catch (e) {
    yield put(actions.postProductCategoryFailure({ message: 'Cant post product' }));
  }
}

export default [
  fork(takeEvery, constants.GET_PRODUCT_CATEGORIES_REQUEST, getProductCategoriesRequest),
  fork(takeEvery, constants.GET_PRODUCT_CATEGORY_REQUEST, getProductCategoryRequest),
  fork(takeEvery, constants.POST_PRODUCT_CATEGORY_REQUEST, postProductCategoryRequest),
];
