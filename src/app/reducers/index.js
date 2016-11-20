import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import uiReducer from 'reducers/uiReducer';
import pagesReducer from 'reducers/pagesReducer';
import pageCategoriesReducer from 'reducers/pageCategoriesReducer';
import pageSubCategoriesReducer from 'reducers/pageSubCategoriesReducer';
import productsReducer from 'reducers/productsReducer';
import productCategoriesReducer from 'reducers/productCategoriesReducer';
import productImagesReducer from 'reducers/productImagesReducer';
import productSubCategoriesReducer from 'reducers/productSubCategoriesReducer';
import imageUploadReducer from 'reducers/imageUploadReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  uiReducer,
  pagesReducer,
  pageCategoriesReducer,
  pageSubCategoriesReducer,
  productsReducer,
  productImagesReducer,
  productCategoriesReducer,
  productSubCategoriesReducer,
  imageUploadReducer,
  routing,
  form: formReducer,
});
