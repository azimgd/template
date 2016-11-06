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
