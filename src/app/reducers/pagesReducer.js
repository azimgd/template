import { handleActions } from 'redux-actions';
import update from 'react-addons-update';
import * as constants from 'constants/index';

const initialState = {
  data: [],
};

const getPagesSuccess = (state, action) => update(state, {
  data: { $set: action.payload.data },
});

export default handleActions({
  [constants.GET_PAGES_SUCCESS]: getPagesSuccess,
}, initialState);
