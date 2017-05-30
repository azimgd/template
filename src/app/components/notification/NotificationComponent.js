import React, { PropTypes } from 'react';
import 'scss/components/_NotificationComponent.scss';

const NotificationComponent = ({ isVisible, message, status, toggleNotification }) =>
  <div className={`NotificationComponentBlock NotificationComponentBlock--${status}`} style={{ display: isVisible ? 'block' : 'none' }}>
    <div className="NotificationComponent">
      <div className="NotificationComponent-content">
        {message}
      </div>
    </div>
  </div>;

NotificationComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  toggleNotification: PropTypes.func.isRequired,
};

export default NotificationComponent;
