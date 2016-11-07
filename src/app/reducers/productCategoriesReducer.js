import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  productCategories: {
    data: [],
  },
};

const getProductCategoriesSuccess = (state, action) => update(state, {
  productCategories: {
    data: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.GET_PAGE_CATEGORIES_SUCCESS]: getProductCategoriesSuccess,
}, initialState);
