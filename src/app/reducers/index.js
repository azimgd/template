import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import uiReducer from 'reducers/uiReducer';

export default combineReducers({
  uiReducer,
  routing,
});
