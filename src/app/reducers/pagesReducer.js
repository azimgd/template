import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  pages: {
    data: [],
  },
  page: {
    data: {},
  },
  actions: {
    postPage: {
      message: null,
      status: null,
      createdAt: null,
    },
  },
};

/**
 * Get pages
 */
const getPagesSuccess = (state, action) => update(state, {
  pages: {
    data: { $set: action.payload.data },
  },
});

const getPagesIdle = (state) => update(state, {
  pages: {
    data: { $set: initialState.pages.data },
  },
});


/**
 * Get page
 */
const getPageSuccess = (state, action) => update(state, {
  page: {
    data: { $set: action.payload.data },
  },
});

const getPageIdle = (state) => update(state, {
  page: {
    data: { $set: initialState.page.data },
  },
});

/**
 * Post page
 */
const postPageSuccess = (state, action) => update(state, {
  actions: {
    postPage: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

const postPageFailure = (state, action) => update(state, {
  actions: {
    postPage: {
      message: { $set: action.payload.message },
      status: { $set: constants.STATUS_SUCCESS },
      createdAt: { $set: Date.now() },
    },
  },
});

export default handleActions({
  [constants.GET_PAGES_SUCCESS]: getPagesSuccess,
  [constants.GET_PAGES_IDLE]: getPagesIdle,

  [constants.GET_PAGE_SUCCESS]: getPageSuccess,
  [constants.GET_PAGE_IDLE]: getPageIdle,

  [constants.POST_PAGE_SUCCESS]: postPageSuccess,
  [constants.POST_PAGE_FAILURE]: postPageFailure,
}, initialState);
