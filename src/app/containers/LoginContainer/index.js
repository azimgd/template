import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/LoginContainer/_LoginContainer.scss';

import loginHoc from 'containers/LoginContainer/loginHoc';
import LoginFormComponent from 'components/LoginForm/LoginFormComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import flow from 'lodash/flow';

const LoginContainer = ({ postLoginRequest, notificationsSuccess, notificationsFailure }) => (
  <div styleName="block">
    <div styleName="title">
      Login to {APP_TITLE}
    </div>

    <div styleName="component">
      <div styleName="component-block">
        {notificationsSuccess.map(notificationSuccess =>
          <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
        )}

        {notificationsFailure.map(notificationFailure =>
          <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
        )}
      </div>

      <div styleName="component-block">
        <LoginFormComponent postLoginRequest={postLoginRequest} />
      </div>
    </div>
  </div>
);

export const propTypes = {
  postLoginRequest: PropTypes.func.isRequired,
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
};

LoginContainer.propTypes = propTypes;
export const init = flow([loginHoc]);
export default init(css(LoginContainer, styles));
