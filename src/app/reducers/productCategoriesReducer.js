import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  productCategories: {
    data: [],
  },
  actions: {
    getProductCategories: {
      message: null,
      status: null,
      createdAt: null,
    },
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
  actions: {
    getProductCategories: { $setRequestActionSuccess: action.payload },
  },
});

const getProductCategoriesFailure = (state, action) => update(state, {
  actions: {
    getProductCategories: { $setRequestActionFailure: action.payload },
  },
});

const getProductCategoriesIdle = (state, action) => update(state, {
  productCategories: {
    data: { $set: initialState.productCategories.data },
  },
  actions: {
    getProductCategories: { $setRequestActionIdle: action.payload },
  },
});

/**
 * Post product categories
 */
const postProductCategorySuccess = (state, action) => update(state, {
  actions: {
    postProductCategory: { $setRequestActionSuccess: action.payload },
  },
});

const postProductCategoryFailure = (state, action) => update(state, {
  actions: {
    postProductCategory: { $setRequestActionFailure: action.payload },
  },
});

const postProductCategoryIdle = (state, action) => update(state, {
  actions: {
    postProductCategory: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_CATEGORIES_SUCCESS]: getProductCategoriesSuccess,
  [constants.GET_PRODUCT_CATEGORIES_FAILURE]: getProductCategoriesFailure,
  [constants.GET_PRODUCT_CATEGORIES_IDLE]: getProductCategoriesIdle,

  [constants.POST_PRODUCT_CATEGORY_SUCCESS]: postProductCategorySuccess,
  [constants.POST_PRODUCT_CATEGORY_FAILURE]: postProductCategoryFailure,
  [constants.POST_PRODUCT_CATEGORY_IDLE]: postProductCategoryIdle,
}, initialState);
