import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  productSubCategories: {
    data: [],
  },
};

const getProductSubCategoriesSuccess = (state, action) => update(state, {
  productSubCategories: {
    data: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.GET_PRODUCT_SUB_CATEGORIES_SUCCESS]: getProductSubCategoriesSuccess,
}, initialState);
