import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  pageSubCategories: {
    data: [],
  },
};

const getPageSubCategoriesSuccess = (state, action) => update(state, {
  pageSubCategories: {
    data: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.GET_PAGE_SUB_CATEGORIES_SUCCESS]: getPageSubCategoriesSuccess,
}, initialState);
