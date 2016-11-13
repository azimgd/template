import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  productSubCategories: {
    data: [],
  },
  actions: {
    postProductSubCategory: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

const getProductSubCategoriesSuccess = (state, action) => update(state, {
  productSubCategories: {
    data: { $set: action.payload.data },
  },
});

const postProductSubCategorySuccess = (state, action) => update(state, {
  actions: {
    postProductSubCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

const postProductSubCategoryFailure = (state, action) => update(state, {
  actions: {
    postProductSubCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_FAILURE },
      createdAt: { $set: Date.now() },
    },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_SUB_CATEGORIES_SUCCESS]: getProductSubCategoriesSuccess,
  [constants.POST_PRODUCT_SUB_CATEGORY_SUCCESS]: postProductSubCategorySuccess,
  [constants.POST_PRODUCT_SUB_CATEGORY_FAILURE]: postProductSubCategoryFailure,
}, initialState);
