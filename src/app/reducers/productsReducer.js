import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  products: {
    data: [],
  },
  product: {
    data: {},
  },
};

const getProductsSuccess = (state, action) => update(state, {
  products: {
    data: { $set: action.payload.data },
  },
});

const getProductSuccess = (state, action) => update(state, {
  product: {
    data: { $set: action.payload.data },
  },
});

export default handleActions({
  [constants.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [constants.GET_PRODUCT_SUCCESS]: getProductSuccess,
}, initialState);
