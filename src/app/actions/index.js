import { createAction } from 'redux-actions';
import * as constants from 'constants/index';

export const toggleCartDropdown = createAction(constants.TOGGLE_CART_DROPDOWN);
export const toggleAlertMessage = createAction(constants.TOGGLE_ALERT_MESSAGE);
