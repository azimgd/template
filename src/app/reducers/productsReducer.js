import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
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

const getProductsSuccess = (state, action) => update(state, {
  products: {
    data: { $set: action.payload.data },
  },
});

const getProductSuccess = (state, action) => update(state, {
  product: {
    data: { $set: action.payload.data },
  },
});

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
  [constants.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [constants.POST_PRODUCT_SUCCESS]: postProductSuccess,
  [constants.POST_PRODUCT_FAILURE]: postProductFailure,
}, initialState);
