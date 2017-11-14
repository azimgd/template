import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import uiReducer from 'reducers/uiReducer';
import loginReducer from 'reducers/loginReducer';
import pagesReducer from 'reducers/pagesReducer';
import pageCategoriesReducer from 'reducers/pageCategoriesReducer';
import pageSubCategoriesReducer from 'reducers/pageSubCategoriesReducer';
import productsReducer from 'reducers/productsReducer';
import productCategoriesReducer from 'reducers/productCategoriesReducer';
import productImagesReducer from 'reducers/productImagesReducer';
import productOptionsReducer from 'reducers/productOptionsReducer';
import productSubCategoriesReducer from 'reducers/productSubCategoriesReducer';
import imageUploadReducer from 'reducers/imageUploadReducer';
import templateReducers from 'template/reducers/index';

export default {
  uiReducer,
  loginReducer,
  pagesReducer,
  pageCategoriesReducer,
  pageSubCategoriesReducer,
  productsReducer,
  productImagesReducer,
  productCategoriesReducer,
  productOptionsReducer,
  productSubCategoriesReducer,
  imageUploadReducer,
  routing,
  form: formReducer,

  ...templateReducers,
};
