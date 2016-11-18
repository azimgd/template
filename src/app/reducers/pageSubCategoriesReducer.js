import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  pageSubCategories: {
    data: [],
  },
  actions: {
    postPageSubCategory: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get page subCategories
 */
const getPageSubCategoriesSuccess = (state, action) => update(state, {
  pageSubCategories: {
    data: { $set: action.payload.data },
  },
});

const getPageSubCategoriesIdle = (state) => update(state, {
  pageSubCategories: {
    data: { $set: initialState.pageSubCategories.data },
  },
});


/**
 * Post page subCategories
 */
const postPageSubCategorySuccess = (state, action) => update(state, {
  actions: {
    postPageSubCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

const postPageSubCategoryFailure = (state, action) => update(state, {
  actions: {
    postPageSubCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_FAILURE },
      createdAt: { $set: Date.now() },
    },
  },
});

export default handleActions({
  [constants.GET_PAGE_SUB_CATEGORIES_SUCCESS]: getPageSubCategoriesSuccess,
  [constants.GET_PAGE_SUB_CATEGORIES_IDLE]: getPageSubCategoriesIdle,

  [constants.POST_PAGE_SUB_CATEGORY_SUCCESS]: postPageSubCategorySuccess,
  [constants.POST_PAGE_SUB_CATEGORY_FAILURE]: postPageSubCategoryFailure,
}, initialState);
