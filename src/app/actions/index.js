import { createAction } from 'redux-actions';
import * as constants from 'constants/index';

export const toggleCartDropdown = createAction(constants.TOGGLE_CART_DROPDOWN);
export const toggleAlertMessage = createAction(constants.TOGGLE_ALERT_MESSAGE);

/**
 * Pages
 */
export const getPagesIdle = createAction(constants.GET_PAGES_IDLE);
export const getPagesRequest = createAction(constants.GET_PAGES_REQUEST);
export const getPagesSuccess = createAction(constants.GET_PAGES_SUCCESS);
export const getPagesFailure = createAction(constants.GET_PAGES_FAILURE);

export const getPageIdle = createAction(constants.GET_PAGE_IDLE);
export const getPageRequest = createAction(constants.GET_PAGE_REQUEST);
export const getPageSuccess = createAction(constants.GET_PAGE_SUCCESS);
export const getPageFailure = createAction(constants.GET_PAGE_FAILURE);

export const postPageIdle = createAction(constants.POST_PAGE_IDLE);
export const postPageRequest = createAction(constants.POST_PAGE_REQUEST);
export const postPageSuccess = createAction(constants.POST_PAGE_SUCCESS);
export const postPageFailure = createAction(constants.POST_PAGE_FAILURE);


/**
 * Products
 */
export const getProductsIdle = createAction(constants.GET_PRODUCTS_IDLE);
export const getProductsRequest = createAction(constants.GET_PRODUCTS_REQUEST);
export const getProductsSuccess = createAction(constants.GET_PRODUCTS_SUCCESS);
export const getProductsFailure = createAction(constants.GET_PRODUCTS_FAILURE);

export const getProductIdle = createAction(constants.GET_PRODUCT_IDLE);
export const getProductRequest = createAction(constants.GET_PRODUCT_REQUEST);
export const getProductSuccess = createAction(constants.GET_PRODUCT_SUCCESS);
export const getProductFailure = createAction(constants.GET_PRODUCT_FAILURE);

export const postProductIdle = createAction(constants.POST_PRODUCT_IDLE);
export const postProductRequest = createAction(constants.POST_PRODUCT_REQUEST);
export const postProductSuccess = createAction(constants.POST_PRODUCT_SUCCESS);
export const postProductFailure = createAction(constants.POST_PRODUCT_FAILURE);


/**
 * Page categories
 */
export const getPageCategoriesIdle = createAction(constants.GET_PAGE_CATEGORIES_IDLE);
export const getPageCategoriesRequest = createAction(constants.GET_PAGE_CATEGORIES_REQUEST);
export const getPageCategoriesSuccess = createAction(constants.GET_PAGE_CATEGORIES_SUCCESS);
export const getPageCategoriesFailure = createAction(constants.GET_PAGE_CATEGORIES_FAILURE);

export const getPageCategoryIdle = createAction(constants.GET_PAGE_CATEGORY_IDLE);
export const getPageCategoryRequest = createAction(constants.GET_PAGE_CATEGORY_REQUEST);
export const getPageCategorySuccess = createAction(constants.GET_PAGE_CATEGORY_SUCCESS);
export const getPageCategoryFailure = createAction(constants.GET_PAGE_CATEGORY_FAILURE);

export const postPageCategoryIdle = createAction(constants.POST_PAGE_CATEGORY_IDLE);
export const postPageCategoryRequest = createAction(constants.POST_PAGE_CATEGORY_REQUEST);
export const postPageCategorySuccess = createAction(constants.POST_PAGE_CATEGORY_SUCCESS);
export const postPageCategoryFailure = createAction(constants.POST_PAGE_CATEGORY_FAILURE);


/**
 * Page categories
 */
export const getPageSubCategoriesIdle = createAction(constants.GET_PAGE_SUB_CATEGORIES_IDLE);
export const getPageSubCategoriesRequest = createAction(constants.GET_PAGE_SUB_CATEGORIES_REQUEST);
export const getPageSubCategoriesSuccess = createAction(constants.GET_PAGE_SUB_CATEGORIES_SUCCESS);
export const getPageSubCategoriesFailure = createAction(constants.GET_PAGE_SUB_CATEGORIES_FAILURE);

export const getPageSubCategoryIdle = createAction(constants.GET_PAGE_SUB_CATEGORY_IDLE);
export const getPageSubCategoryRequest = createAction(constants.GET_PAGE_SUB_CATEGORY_REQUEST);
export const getPageSubCategorySuccess = createAction(constants.GET_PAGE_SUB_CATEGORY_SUCCESS);
export const getPageSubCategoryFailure = createAction(constants.GET_PAGE_SUB_CATEGORY_FAILURE);

export const postPageSubCategoryIdle = createAction(constants.POST_PAGE_SUB_CATEGORY_IDLE);
export const postPageSubCategoryRequest = createAction(constants.POST_PAGE_SUB_CATEGORY_REQUEST);
export const postPageSubCategorySuccess = createAction(constants.POST_PAGE_SUB_CATEGORY_SUCCESS);
export const postPageSubCategoryFailure = createAction(constants.POST_PAGE_SUB_CATEGORY_FAILURE);


/**
 * Product categories
 */
export const getProductCategoriesIdle = createAction(constants.GET_PRODUCT_CATEGORIES_IDLE);
export const getProductCategoriesRequest = createAction(constants.GET_PRODUCT_CATEGORIES_REQUEST);
export const getProductCategoriesSuccess = createAction(constants.GET_PRODUCT_CATEGORIES_SUCCESS);
export const getProductCategoriesFailure = createAction(constants.GET_PRODUCT_CATEGORIES_FAILURE);

export const getProductCategoryIdle = createAction(constants.GET_PRODUCT_CATEGORY_IDLE);
export const getProductCategoryRequest = createAction(constants.GET_PRODUCT_CATEGORY_REQUEST);
export const getProductCategorySuccess = createAction(constants.GET_PRODUCT_CATEGORY_SUCCESS);
export const getProductCategoryFailure = createAction(constants.GET_PRODUCT_CATEGORY_FAILURE);

export const postProductCategoryIdle = createAction(constants.POST_PRODUCT_CATEGORY_IDLE);
export const postProductCategoryRequest = createAction(constants.POST_PRODUCT_CATEGORY_REQUEST);
export const postProductCategorySuccess = createAction(constants.POST_PRODUCT_CATEGORY_SUCCESS);
export const postProductCategoryFailure = createAction(constants.POST_PRODUCT_CATEGORY_FAILURE);


/**
 * Product sub categories
 */
export const getProductSubCategoriesIdle = createAction(constants.GET_PRODUCT_SUB_CATEGORIES_IDLE);
export const getProductSubCategoriesRequest = createAction(constants.GET_PRODUCT_SUB_CATEGORIES_REQUEST);
export const getProductSubCategoriesSuccess = createAction(constants.GET_PRODUCT_SUB_CATEGORIES_SUCCESS);
export const getProductSubCategoriesFailure = createAction(constants.GET_PRODUCT_SUB_CATEGORIES_FAILURE);

export const getProductSubCategoryIdle = createAction(constants.GET_PRODUCT_SUB_CATEGORY_IDLE);
export const getProductSubCategoryRequest = createAction(constants.GET_PRODUCT_SUB_CATEGORY_REQUEST);
export const getProductSubCategorySuccess = createAction(constants.GET_PRODUCT_SUB_CATEGORY_SUCCESS);
export const getProductSubCategoryFailure = createAction(constants.GET_PRODUCT_SUB_CATEGORY_FAILURE);

export const postProductSubCategoryIdle = createAction(constants.POST_PRODUCT_SUB_CATEGORY_IDLE);
export const postProductSubCategoryRequest = createAction(constants.POST_PRODUCT_SUB_CATEGORY_REQUEST);
export const postProductSubCategorySuccess = createAction(constants.POST_PRODUCT_SUB_CATEGORY_SUCCESS);
export const postProductSubCategoryFailure = createAction(constants.POST_PRODUCT_SUB_CATEGORY_FAILURE);
