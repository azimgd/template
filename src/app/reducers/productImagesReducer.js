import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  productImages: {
    data: [],
  },
  actions: {
    getProductImages: {
      message: null,
      status: null,
      createdAt: null,
    },
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
  actions: {
    getProductImages: { $setRequestActionSuccess: action.payload },
  },
});

const getProductImagesFailure = (state, action) => update(state, {
  actions: {
    getProductImages: { $setRequestActionFailure: action.payload },
  },
});

const getProductImagesIdle = (state, action) => update(state, {
  productImages: {
    data: { $set: initialState.productImages.data },
  },
  actions: {
    getProductImages: { $setRequestActionIdle: action.payload },
  },
});

/**
 * Post product images
 */
const postProductImageSuccess = (state, action) => update(state, {
  actions: {
    postProductImage: { $setRequestActionSuccess: action.payload },
  },
});

const postProductImageFailure = (state, action) => update(state, {
  actions: {
    postProductImage: { $setRequestActionFailure: action.payload },
  },
});

const postProductImageIdle = (state, action) => update(state, {
  actions: {
    postProductImage: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_IMAGES_SUCCESS]: getProductImagesSuccess,
  [constants.GET_PRODUCT_IMAGES_FAILURE]: getProductImagesFailure,
  [constants.GET_PRODUCT_IMAGES_IDLE]: getProductImagesIdle,

  [constants.POST_PRODUCT_IMAGE_SUCCESS]: postProductImageSuccess,
  [constants.POST_PRODUCT_IMAGE_FAILURE]: postProductImageFailure,
  [constants.POST_PRODUCT_IMAGE_IDLE]: postProductImageIdle,
}, initialState);
