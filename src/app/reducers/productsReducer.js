import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  products: {
    data: [],
  },
  product: {
    data: {},
  },
  actions: {
    postProduct: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get products
 */
const getProductsSuccess = (state, action) => update(state, {
  products: {
    data: { $set: action.payload.data },
  },
});

const getProductsIdle = (state) => update(state, {
  products: {
    data: { $set: initialState.products.data },
  },
});


/**
 * Get product
 */
const getProductSuccess = (state, action) => update(state, {
  product: {
    data: { $set: action.payload.data },
  },
});

const getProductIdle = (state) => update(state, {
  product: {
    data: { $set: initialState.product.data },
  },
});

/**
 * Post product
 */
const postProductSuccess = (state, action) => update(state, {
  actions: {
    postProduct: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

const postProductFailure = (state, action) => update(state, {
  actions: {
    postProduct: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_FAILURE },
      createdAt: { $set: Date.now() },
    },
  },
});

export default handleActions({
  [constants.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [constants.GET_PRODUCTS_IDLE]: getProductsIdle,

  [constants.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [constants.GET_PRODUCT_IDLE]: getProductIdle,

  [constants.POST_PRODUCT_SUCCESS]: postProductSuccess,
  [constants.POST_PRODUCT_FAILURE]: postProductFailure,
}, initialState);
