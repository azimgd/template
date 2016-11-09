import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Product sub categories
 */
function* getProductSubCategoriesRequest() {
  try {
    const data = yield call(api.getProductSubCategories);
    yield put(actions.getProductSubCategoriesSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductSubCategoriesFailure({ errors: { preview: 'Cant get products' } }));
  }
}

function* getProductSubCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductSubCategory.bind(null, payload));
    yield put(actions.getProductSubCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.getProductSubCategoryFailure({ errors: { preview: 'Cant get products' } }));
  }
}

function* postProductSubCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProductSubCategory.bind(null, payload));
    yield put(actions.postProductSubCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.postProductSubCategoryFailure({ errors: { preview: 'Cant post product' } }));
  }
}

export default [
  fork(takeEvery, constants.GET_PRODUCT_SUB_CATEGORIES_REQUEST, getProductSubCategoriesRequest),
  fork(takeEvery, constants.GET_PRODUCT_SUB_CATEGORY_REQUEST, getProductSubCategoryRequest),
  fork(takeEvery, constants.POST_PRODUCT_SUB_CATEGORY_REQUEST, postProductSubCategoryRequest),
];
