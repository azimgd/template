import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  pageCategories: {
    data: [],
  },
  actions: {
    postPageCategory: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get page categories
 */
const getPageCategoriesSuccess = (state, action) => update(state, {
  pageCategories: {
    data: { $set: action.payload.data },
  },
});

const getPageCategoriesIdle = (state) => update(state, {
  pageCategories: {
    data: { $set: initialState.pageCategories.data },
  },
});

/**
 * Post page categories
 */
const postPageCategorySuccess = (state, action) => update(state, {
  actions: {
    postPageCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

const postPageCategoryFailure = (state, action) => update(state, {
  actions: {
    postPageCategory: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_FAILURE },
      createdAt: { $set: Date.now() },
    },
  },
});

export default handleActions({
  [constants.GET_PAGE_CATEGORIES_SUCCESS]: getPageCategoriesSuccess,
  [constants.GET_PAGE_CATEGORIES_IDLE]: getPageCategoriesIdle,

  [constants.POST_PAGE_CATEGORY_SUCCESS]: postPageCategorySuccess,
  [constants.POST_PAGE_CATEGORY_FAILURE]: postPageCategoryFailure,
}, initialState);
