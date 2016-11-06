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
