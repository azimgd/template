import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty } from 'utils/index';
import { getFailedNotifications, getSucceededNotifications } from 'services/uiService';

const mapStateToProps = (state) => ({
  loginActions: state.loginReducer.actions,
});

const mapDispatchToProps = {
  postLoginRequest: actions.postLoginRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([
  ]);
  const notificationsSuccess = getSucceededNotifications([
    stateProps.loginActions.postLogin,
  ]);
  const notificationsFailure = getFailedNotifications([
    stateProps.loginActions.postLogin,
  ]);
  return Object.assign({
    isLoading,
    isEmpty,
    notificationsSuccess,
    notificationsFailure,
  }, ownProps, stateProps, dispatchProps);
};

export default (LoginContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginContainer);
