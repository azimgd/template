import { createAction } from 'redux-actions';
import * as constants from 'constants/index';

export const toggleCartDropdown = createAction(constants.TOGGLE_CART_DROPDOWN);
export const toggleAlertMessage = createAction(constants.TOGGLE_ALERT_MESSAGE);

/**
 * Pages
 */
export const postLoginIdle = createAction(constants.POST_LOGIN_IDLE);
export const postLoginRequest = createAction(constants.POST_LOGIN_REQUEST);
export const postLoginSuccess = createAction(constants.POST_LOGIN_SUCCESS);
export const postLoginFailure = createAction(constants.POST_LOGIN_FAILURE);

export const postLogoutIdle = createAction(constants.POST_LOGOUT_IDLE);
export const postLogoutRequest = createAction(constants.POST_LOGOUT_REQUEST);
export const postLogoutSuccess = createAction(constants.POST_LOGOUT_SUCCESS);
export const postLogoutFailure = createAction(constants.POST_LOGOUT_FAILURE);

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

/**
 * Product categories
 */
export const getProductOptionsIdle = createAction(constants.GET_PRODUCT_OPTIONS_IDLE);
export const getProductOptionsRequest = createAction(constants.GET_PRODUCT_OPTIONS_REQUEST);
export const getProductOptionsSuccess = createAction(constants.GET_PRODUCT_OPTIONS_SUCCESS);
export const getProductOptionsFailure = createAction(constants.GET_PRODUCT_OPTIONS_FAILURE);

export const getDistinctProductOptionsIdle = createAction(constants.GET_DISTINCT_PRODUCT_OPTIONS_IDLE);
export const getDistinctProductOptionsRequest = createAction(constants.GET_DISTINCT_PRODUCT_OPTIONS_REQUEST);
export const getDistinctProductOptionsSuccess = createAction(constants.GET_DISTINCT_PRODUCT_OPTIONS_SUCCESS);
export const getDistinctProductOptionsFailure = createAction(constants.GET_DISTINCT_PRODUCT_OPTIONS_FAILURE);

export const getProductSuggestIdle = createAction(constants.GET_PRODUCT_SUGGEST_IDLE);
export const getProductSuggestRequest = createAction(constants.GET_PRODUCT_SUGGEST_REQUEST);
export const getProductSuggestSuccess = createAction(constants.GET_PRODUCT_SUGGEST_SUCCESS);
export const getProductSuggestFailure = createAction(constants.GET_PRODUCT_SUGGEST_FAILURE);

export const getProductOptionIdle = createAction(constants.GET_PRODUCT_OPTION_IDLE);
export const getProductOptionRequest = createAction(constants.GET_PRODUCT_OPTION_REQUEST);
export const getProductOptionSuccess = createAction(constants.GET_PRODUCT_OPTION_SUCCESS);
export const getProductOptionFailure = createAction(constants.GET_PRODUCT_OPTION_FAILURE);

export const postProductOptionIdle = createAction(constants.POST_PRODUCT_OPTION_IDLE);
export const postProductOptionRequest = createAction(constants.POST_PRODUCT_OPTION_REQUEST);
export const postProductOptionSuccess = createAction(constants.POST_PRODUCT_OPTION_SUCCESS);
export const postProductOptionFailure = createAction(constants.POST_PRODUCT_OPTION_FAILURE);

/**
* Product images
*/
export const getProductImagesIdle = createAction(constants.GET_PRODUCT_IMAGES_IDLE);
export const getProductImagesRequest = createAction(constants.GET_PRODUCT_IMAGES_REQUEST);
export const getProductImagesSuccess = createAction(constants.GET_PRODUCT_IMAGES_SUCCESS);
export const getProductImagesFailure = createAction(constants.GET_PRODUCT_IMAGES_FAILURE);

export const getProductImageIdle = createAction(constants.GET_PRODUCT_IMAGE_IDLE);
export const getProductImageRequest = createAction(constants.GET_PRODUCT_IMAGE_REQUEST);
export const getProductImageSuccess = createAction(constants.GET_PRODUCT_IMAGE_SUCCESS);
export const getProductImageFailure = createAction(constants.GET_PRODUCT_IMAGE_FAILURE);

export const postProductImageIdle = createAction(constants.POST_PRODUCT_IMAGE_IDLE);
export const postProductImageRequest = createAction(constants.POST_PRODUCT_IMAGE_REQUEST);
export const postProductImageRequestBulk = createAction(constants.POST_PRODUCT_IMAGE_REQUEST_BULK);
export const postProductImageSuccess = createAction(constants.POST_PRODUCT_IMAGE_SUCCESS);
export const postProductImageFailure = createAction(constants.POST_PRODUCT_IMAGE_FAILURE);

/**
 * Image upload
 */
export const startImageUpload = createAction(constants.START_IMAGE_UPLOAD);
export const progressImageUpload = createAction(constants.PROGRESS_IMAGE_UPLOAD);
export const errorImageUpload = createAction(constants.ERROR_IMAGE_UPLOAD);
export const finishImageUpload = createAction(constants.FINISH_IMAGE_UPLOAD);
