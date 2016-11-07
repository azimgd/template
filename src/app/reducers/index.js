import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import uiReducer from 'reducers/uiReducer';
import pagesReducer from 'reducers/pagesReducer';
import pageCategoriesReducer from 'reducers/pageCategoriesReducer';
import productsReducer from 'reducers/productsReducer';
import productCategoriesReducer from 'reducers/productCategoriesReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  uiReducer,
  pagesReducer,
  pageCategoriesReducer,
  productsReducer,
  productCategoriesReducer,
  routing,
  form: formReducer,
});
