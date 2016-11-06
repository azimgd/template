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
};

const getPagesSuccess = (state, action) => update(state, {
  pages: {
    data: { $set: action.payload.data },
  },
});

const getPageSuccess = (state, action) => update(state, {
  page: {
    data: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.GET_PAGES_SUCCESS]: getPagesSuccess,
  [constants.GET_PAGE_SUCCESS]: getPageSuccess,
}, initialState);
