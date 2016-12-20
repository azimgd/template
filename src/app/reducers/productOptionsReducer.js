import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  productOptions: {
    data: [],
  },
  actions: {
    getProductOptions: {
      message: null,
      status: null,
      createdAt: null,
    },
    postProductOption: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get product categories
 */
const getProductOptionsSuccess = (state, action) => update(state, {
  productOptions: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProductOptions: { $setRequestActionSuccess: action.payload },
  },
});

const getProductOptionsFailure = (state, action) => update(state, {
  actions: {
    getProductOptions: { $setRequestActionFailure: action.payload },
  },
});

const getProductOptionsIdle = (state, action) => update(state, {
  productOptions: {
    data: { $set: initialState.productOptions.data },
  },
  actions: {
    getProductOptions: { $setRequestActionIdle: action.payload },
  },
});

/**
 * Post product categories
 */
const postProductOptionSuccess = (state, action) => update(state, {
  actions: {
    postProductOption: { $setRequestActionSuccess: action.payload },
  },
});

const postProductOptionFailure = (state, action) => update(state, {
  actions: {
    postProductOption: { $setRequestActionFailure: action.payload },
  },
});

const postProductOptionIdle = (state, action) => update(state, {
  actions: {
    postProductOption: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_OPTIONS_SUCCESS]: getProductOptionsSuccess,
  [constants.GET_PRODUCT_OPTIONS_FAILURE]: getProductOptionsFailure,
  [constants.GET_PRODUCT_OPTIONS_IDLE]: getProductOptionsIdle,

  [constants.POST_PRODUCT_OPTION_SUCCESS]: postProductOptionSuccess,
  [constants.POST_PRODUCT_OPTION_FAILURE]: postProductOptionFailure,
  [constants.POST_PRODUCT_OPTION_IDLE]: postProductOptionIdle,
}, initialState);
