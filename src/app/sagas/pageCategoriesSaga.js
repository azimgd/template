import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Page categories
 */
function* getPageCategoriesRequest() {
  try {
    const data = yield call(api.getPageCategories);
    yield put(actions.getPageCategoriesSuccess({ data }));
  } catch (e) {
    yield put(actions.getPageCategoriesFailure({ message: 'Cant get products' }));
  }
}

function* getPageCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getPageCategory.bind(null, payload));
    yield put(actions.getPageCategorySuccess({ data }));
  } catch (e) {
    yield put(actions.getPageCategoryFailure({ message: 'Cant get products' }));
  }
}

function* postPageCategoryRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postPageCategory.bind(null, payload));
    yield put(actions.postPageCategorySuccess({ data, message: 'Page category has been created' }));
  } catch (e) {
    yield put(actions.postPageCategoryFailure({ message: 'Cant post product' }));
  }
}

export default [
  fork(takeLatest, constants.GET_PAGE_CATEGORIES_REQUEST, getPageCategoriesRequest),
  fork(takeLatest, constants.GET_PAGE_CATEGORY_REQUEST, getPageCategoryRequest),
  fork(takeLatest, constants.POST_PAGE_CATEGORY_REQUEST, postPageCategoryRequest),
];
