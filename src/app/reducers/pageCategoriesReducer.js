import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  pageCategories: {
    data: [],
  },
};

const getPageCategoriesSuccess = (state, action) => update(state, {
  pageCategories: {
    data: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.GET_PAGE_CATEGORIES_SUCCESS]: getPageCategoriesSuccess,
}, initialState);
