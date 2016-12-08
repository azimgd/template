import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  pageCategories: {
    data: [],
  },
  actions: {
    getPageCategories: {
      message: null,
      status: null,
      createdAt: null,
    },
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
  actions: {
    getPageCategories: { $setRequestActionSuccess: action.payload },
  },
});

const getPageCategoriesFailure = (state, action) => update(state, {
  actions: {
    getPageCategories: { $setRequestActionFailure: action.payload },
  },
});

const getPageCategoriesIdle = (state, action) => update(state, {
  pageCategories: {
    data: { $set: initialState.pageCategories.data },
  },
  actions: {
    getPageCategories: { $setRequestActionIdle: action.payload },
  },
});

/**
 * Post page categories
 */
const postPageCategorySuccess = (state, action) => update(state, {
  actions: {
    postPageCategory: { $setRequestActionSuccess: action.payload },
  },
});

const postPageCategoryFailure = (state, action) => update(state, {
  actions: {
    postPageCategory: { $setRequestActionFailure: action.payload },
  },
});

const postPageCategoryIdle = (state, action) => update(state, {
  actions: {
    postPageCategory: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PAGE_CATEGORIES_SUCCESS]: getPageCategoriesSuccess,
  [constants.GET_PAGE_CATEGORIES_FAILURE]: getPageCategoriesFailure,
  [constants.GET_PAGE_CATEGORIES_IDLE]: getPageCategoriesIdle,

  [constants.POST_PAGE_CATEGORY_SUCCESS]: postPageCategorySuccess,
  [constants.POST_PAGE_CATEGORY_FAILURE]: postPageCategoryFailure,
  [constants.POST_PAGE_CATEGORY_IDLE]: postPageCategoryIdle,
}, initialState);
