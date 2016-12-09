import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  productSubCategories: {
    data: [],
  },
  actions: {
    getProductSubCategories: {
      message: null,
      status: null,
      createdAt: null,
    },
    postProductSubCategory: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get product subCategories
 */
const getProductSubCategoriesSuccess = (state, action) => update(state, {
  productSubCategories: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProductSubCategories: { $setRequestActionSuccess: action.payload },
  },
});

const getProductSubCategoriesFailure = (state, action) => update(state, {
  actions: {
    getProductSubCategories: { $setRequestActionFailure: action.payload },
  },
});

const getProductSubCategoriesIdle = (state, action) => update(state, {
  productSubCategories: {
    data: { $set: initialState.productSubCategories.data },
  },
  actions: {
    getProductSubCategories: { $setRequestActionIdle: action.payload },
  },
});

/**
 * Post product subCategory
 */
const postProductSubCategorySuccess = (state, action) => update(state, {
  actions: {
    postProductSubCategory: { $setRequestActionSuccess: action.payload },
  },
});

const postProductSubCategoryFailure = (state, action) => update(state, {
  actions: {
    postProductSubCategory: { $setRequestActionFailure: action.payload },
  },
});

const postProductSubCategoryIdle = (state, action) => update(state, {
  actions: {
    postProductSubCategory: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_SUB_CATEGORIES_SUCCESS]: getProductSubCategoriesSuccess,
  [constants.GET_PRODUCT_SUB_CATEGORIES_FAILURE]: getProductSubCategoriesFailure,
  [constants.GET_PRODUCT_SUB_CATEGORIES_IDLE]: getProductSubCategoriesIdle,

  [constants.POST_PRODUCT_SUB_CATEGORY_SUCCESS]: postProductSubCategorySuccess,
  [constants.POST_PRODUCT_SUB_CATEGORY_FAILURE]: postProductSubCategoryFailure,
  [constants.POST_PRODUCT_SUB_CATEGORY_IDLE]: postProductSubCategoryIdle,
}, initialState);
