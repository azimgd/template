import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  pages: {
    data: [],
  },
  page: {
    data: {},
  },
  actions: {
    getPages: {
      message: null,
      status: null,
      createdAt: null,
    },
    getPage: {
      message: null,
      status: null,
      createdAt: null,
    },
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
  actions: {
    getPages: { $setRequestActionSuccess: action.payload },
  },
});

const getPagesFailure = (state, action) => update(state, {
  actions: {
    getPages: { $setRequestActionFailure: action.payload },
  },
});

const getPagesIdle = (state, action) => update(state, {
  pages: {
    data: { $set: initialState.pages.data },
  },
  actions: {
    getPages: { $setRequestActionIdle: action.payload },
  },
});


/**
 * Get page
 */
const getPageSuccess = (state, action) => update(state, {
  page: {
    data: { $set: action.payload.data },
  },
  actions: {
    getPage: { $setRequestActionSuccess: action.payload },
  },
});

const getPageFailure = (state, action) => update(state, {
  actions: {
    getPage: { $setRequestActionFailure: action.payload },
  },
});

const getPageIdle = (state, action) => update(state, {
  page: {
    data: { $set: initialState.page.data },
  },
  actions: {
    getPage: { $setRequestActionIdle: action.payload },
  },
});

/**
 * Post page
 */
const postPageSuccess = (state, action) => update(state, {
  actions: {
    postPage: { $setRequestActionSuccess: action.payload },
  },
});

const postPageFailure = (state, action) => update(state, {
  actions: {
    postPage: { $setRequestActionFailure: action.payload },
  },
});

const postPageIdle = (state, action) => update(state, {
  actions: {
    postPage: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PAGES_SUCCESS]: getPagesSuccess,
  [constants.GET_PAGES_FAILURE]: getPagesFailure,
  [constants.GET_PAGES_IDLE]: getPagesIdle,

  [constants.GET_PAGE_SUCCESS]: getPageSuccess,
  [constants.GET_PAGE_FAILURE]: getPageFailure,
  [constants.GET_PAGE_IDLE]: getPageIdle,

  [constants.POST_PAGE_SUCCESS]: postPageSuccess,
  [constants.POST_PAGE_FAILURE]: postPageFailure,
  [constants.POST_PAGE_IDLE]: postPageIdle,
}, initialState);
