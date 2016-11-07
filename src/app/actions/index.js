import { createAction } from 'redux-actions';
import * as constants from 'constants/index';

export const toggleCartDropdown = createAction(constants.TOGGLE_CART_DROPDOWN);
export const toggleAlertMessage = createAction(constants.TOGGLE_ALERT_MESSAGE);

export const getPagesRequest = createAction(constants.GET_PAGES_REQUEST);
export const getPagesSuccess = createAction(constants.GET_PAGES_SUCCESS);
export const getPagesFailure = createAction(constants.GET_PAGES_FAILURE);

export const getPageRequest = createAction(constants.GET_PAGE_REQUEST);
export const getPageSuccess = createAction(constants.GET_PAGE_SUCCESS);
export const getPageFailure = createAction(constants.GET_PAGE_FAILURE);

export const postPageRequest = createAction(constants.POST_PAGE_REQUEST);
export const postPageSuccess = createAction(constants.POST_PAGE_SUCCESS);
export const postPageFailure = createAction(constants.POST_PAGE_FAILURE);

export const getProductsRequest = createAction(constants.GET_PRODUCTS_REQUEST);
export const getProductsSuccess = createAction(constants.GET_PRODUCTS_SUCCESS);
export const getProductsFailure = createAction(constants.GET_PRODUCTS_FAILURE);

export const getProductRequest = createAction(constants.GET_PRODUCT_REQUEST);
export const getProductSuccess = createAction(constants.GET_PRODUCT_SUCCESS);
export const getProductFailure = createAction(constants.GET_PRODUCT_FAILURE);

export const postProductRequest = createAction(constants.POST_PRODUCT_REQUEST);
export const postProductSuccess = createAction(constants.POST_PRODUCT_SUCCESS);
export const postProductFailure = createAction(constants.POST_PRODUCT_FAILURE);

export const getPageCategoriesRequest = createAction(constants.GET_PAGE_CATEGORIES_REQUEST);
export const getPageCategoriesSuccess = createAction(constants.GET_PAGE_CATEGORIES_SUCCESS);
export const getPageCategoriesFailure = createAction(constants.GET_PAGE_CATEGORIES_FAILURE);

export const getPageCategoryRequest = createAction(constants.GET_PAGE_CATEGORY_REQUEST);
export const getPageCategorySuccess = createAction(constants.GET_PAGE_CATEGORY_SUCCESS);
export const getPageCategoryFailure = createAction(constants.GET_PAGE_CATEGORY_FAILURE);

export const postPageCategoryRequest = createAction(constants.POST_PAGE_CATEGORY_REQUEST);
export const postPageCategorySuccess = createAction(constants.POST_PAGE_CATEGORY_SUCCESS);
export const postPageCategoryFailure = createAction(constants.POST_PAGE_CATEGORY_FAILURE);

export const getProductCategoriesRequest = createAction(constants.GET_PRODUCT_CATEGORIES_REQUEST);
export const getProductCategoriesSuccess = createAction(constants.GET_PRODUCT_CATEGORIES_SUCCESS);
export const getProductCategoriesFailure = createAction(constants.GET_PRODUCT_CATEGORIES_FAILURE);

export const getProductCategoryRequest = createAction(constants.GET_PRODUCT_CATEGORY_REQUEST);
export const getProductCategorySuccess = createAction(constants.GET_PRODUCT_CATEGORY_SUCCESS);
export const getProductCategoryFailure = createAction(constants.GET_PRODUCT_CATEGORY_FAILURE);

export const postProductCategoryRequest = createAction(constants.POST_PRODUCT_CATEGORY_REQUEST);
export const postProductCategorySuccess = createAction(constants.POST_PRODUCT_CATEGORY_SUCCESS);
export const postProductCategoryFailure = createAction(constants.POST_PRODUCT_CATEGORY_FAILURE);
