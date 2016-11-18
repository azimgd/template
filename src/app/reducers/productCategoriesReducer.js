import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  productCategories: {
    data: [],
  },
  actions: {
    postProductCategory: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get product categories
 */
const getProductCategoriesSuccess = (state, action) => update(state, {
  productCategories: {
    data: { $set: action.payload.data },
  },
});

const getProductCategoriesIdle = (state) => update(state, {
  productCategories: {
    data: { $set: initialState.productCategories.data },
  },
});

/**
 * Post product categories
 */
const postProductCategorySuccess = (state, action) => update(state, {
  actions: {
    postProductCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

const postProductCategoryFailure = (state, action) => update(state, {
  actions: {
    postProductCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_FAILURE },
      createdAt: { $set: Date.now() },
    },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_CATEGORIES_SUCCESS]: getProductCategoriesSuccess,
  [constants.GET_PRODUCT_CATEGORIES_IDLE]: getProductCategoriesIdle,

  [constants.POST_PRODUCT_CATEGORY_SUCCESS]: postProductCategorySuccess,
  [constants.POST_PRODUCT_CATEGORY_FAILURE]: postProductCategoryFailure,
}, initialState);
