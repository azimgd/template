import React, { PropTypes } from 'react';
import 'containers/LoginContainer/_LoginContainer.scss';

import loginHoc from 'containers/LoginContainer/loginHoc';
import LoginFormComponent from 'components/LoginForm/LoginFormComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import flow from 'lodash/flow';

const LoginContainer = ({ postLoginRequest, notificationsSuccess, notificationsFailure }) => (
  <div className="LoginContainerBlock">
    <div className="LoginContainerBlock-title">
      Login to {APP_TITLE}
    </div>

    <div className="LoginContainer">
      <div className="LoginContainer-block">
        {notificationsSuccess.map(notificationSuccess =>
          <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
        )}

        {notificationsFailure.map(notificationFailure =>
          <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
        )}
      </div>

      <div className="LoginContainer-block">
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
export default init(LoginContainer);
