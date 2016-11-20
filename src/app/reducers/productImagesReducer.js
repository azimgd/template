import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  productImages: {
    data: [],
  },
  actions: {
    postProductImage: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get product images
 */
const getProductImagesSuccess = (state, action) => update(state, {
  productImages: {
    data: { $set: action.payload.data },
  },
});

const getProductImagesIdle = (state) => update(state, {
  productImages: {
    data: { $set: initialState.productImages.data },
  },
});

/**
 * Post product images
 */
const postProductImageSuccess = (state, action) => update(state, {
  actions: {
    postProductImage: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

const postProductImageFailure = (state, action) => update(state, {
  actions: {
    postProductImage: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_FAILURE },
      createdAt: { $set: Date.now() },
    },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_IMAGES_SUCCESS]: getProductImagesSuccess,
  [constants.GET_PRODUCT_IMAGES_IDLE]: getProductImagesIdle,

  [constants.POST_PRODUCT_IMAGE_SUCCESS]: postProductImageSuccess,
  [constants.POST_PRODUCT_IMAGE_FAILURE]: postProductImageFailure,
}, initialState);
