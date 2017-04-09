import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/index';
import * as api from 'api/index';

import * as constants from 'constants/index';

/**
 * Product images
 */
function* getProductImagesRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductImages.bind(null, payload));
    yield put(actions.getProductImagesSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductImagesFailure({ message: 'Cant get products' }));
  }
}

function* getProductImageRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.getProductImage.bind(null, payload));
    yield put(actions.getProductImageSuccess({ data }));
  } catch (e) {
    yield put(actions.getProductImageFailure({ message: 'Cant get products' }));
  }
}

function* postProductImageRequest(req) {
  const { payload } = req;
  try {
    const data = yield call(api.postProductImage.bind(null, payload));
    yield put(actions.postProductImageSuccess({ data, message: 'Product image has been created' }));
  } catch (e) {
    yield put(actions.postProductImageFailure({ message: 'Cant post product' }));
  }
}

function* postProductImageRequestBulk(req) {
  const { payload } = req;
  yield payload
    .map(image => ({ name: image.name, filename: image.filename, publicUrl: image.publicUrl, uniqueProductId: image.uniqueProductId }))
    .map(image => put(actions.postProductImageRequest(image)));
}

export default [
  fork(takeEvery, constants.GET_PRODUCT_IMAGES_REQUEST, getProductImagesRequest),
  fork(takeEvery, constants.GET_PRODUCT_IMAGE_REQUEST, getProductImageRequest),
  fork(takeEvery, constants.POST_PRODUCT_IMAGE_REQUEST, postProductImageRequest),
  fork(takeEvery, constants.POST_PRODUCT_IMAGE_REQUEST_BULK, postProductImageRequestBulk),
];
