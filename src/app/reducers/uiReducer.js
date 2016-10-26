import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  cartDropdownIsVisible: false,
  alertMessageIsVisible: true,
};

const toggleCartDropdown = (state) => update(state, {
  cartDropdownIsVisible: { $set: !state.cartDropdownIsVisible },
});

const toggleAlertMessage = (state) => update(state, {
  alertMessageIsVisible: { $set: !state.alertMessageIsVisible },
});

export default handleActions({
  [constants.TOGGLE_CART_DROPDOWN]: toggleCartDropdown,
  [constants.TOGGLE_ALERT_MESSAGE]: toggleAlertMessage,
}, initialState);
