import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  pageSubCategories: {
    data: [],
  },
  actions: {
    getPageSubCategories: {
      message: null,
      status: null,
      createdAt: null,
    },
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
  actions: {
    getPageSubCategories: { $setRequestActionSuccess: action.payload },
  },
});

const getPageSubCategoriesFailure = (state, action) => update(state, {
  actions: {
    getPageSubCategories: { $setRequestActionFailure: action.payload },
  },
});

const getPageSubCategoriesIdle = (state, action) => update(state, {
  pageSubCategories: {
    data: { $set: initialState.pageSubCategories.data },
  },
  actions: {
    getPageSubCategories: { $setRequestActionIdle: action.payload },
  },
});


/**
 * Post page subCategories
 */
const postPageSubCategorySuccess = (state, action) => update(state, {
  actions: {
    postPageSubCategory: { $setRequestActionSuccess: action.payload },
  },
});

const postPageSubCategoryFailure = (state, action) => update(state, {
  actions: {
    postPageSubCategory: { $setRequestActionFailure: action.payload },
  },
});

const postPageSubCategoryIdle = (state, action) => update(state, {
  actions: {
    postPageSubCategory: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PAGE_SUB_CATEGORIES_SUCCESS]: getPageSubCategoriesSuccess,
  [constants.GET_PAGE_SUB_CATEGORIES_FAILURE]: getPageSubCategoriesFailure,
  [constants.GET_PAGE_SUB_CATEGORIES_IDLE]: getPageSubCategoriesIdle,

  [constants.POST_PAGE_SUB_CATEGORY_SUCCESS]: postPageSubCategorySuccess,
  [constants.POST_PAGE_SUB_CATEGORY_FAILURE]: postPageSubCategoryFailure,
  [constants.POST_PAGE_SUB_CATEGORY_IDLE]: postPageSubCategoryIdle,
}, initialState);
