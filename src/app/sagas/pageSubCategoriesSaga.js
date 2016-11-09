import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Page sub categories
 */
function* getPageSubCategoriesRequest() {
  try {
    const data = yield call(api.getPageSubCategories);
    yield put(actions.getPageSubCategoriesSuccess({ data }));
  } catch (e) {
    yield put(actions.getPageSubCategoriesFailure({ errors: { preview: 'Cant get products' } }));
  }
}

function* getPageSubCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getPageSubCategory.bind(null, payload));
    yield put(actions.getPageSubCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.getPageSubCategoryFailure({ errors: { preview: 'Cant get products' } }));
  }
}

function* postPageSubCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postPageSubCategory.bind(null, payload));
    yield put(actions.postPageSubCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.postPageSubCategoryFailure({ errors: { preview: 'Cant post product' } }));
  }
}

export default [
  fork(takeEvery, constants.GET_PAGE_SUB_CATEGORIES_REQUEST, getPageSubCategoriesRequest),
  fork(takeEvery, constants.GET_PAGE_SUB_CATEGORY_REQUEST, getPageSubCategoryRequest),
  fork(takeEvery, constants.POST_PAGE_SUB_CATEGORY_REQUEST, postPageSubCategoryRequest),
];
