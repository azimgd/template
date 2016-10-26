import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  cartDropdownIsVisible: false,
};

const toggleCartDropdown = (state) => update(state, {
  cartDropdownIsVisible: { $set: !state.cartDropdownIsVisible },
});

export default handleActions({
  [constants.TOGGLE_CART_DROPDOWN]: toggleCartDropdown,
}, initialState);
