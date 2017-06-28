import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Notification/_NotificationComponent.scss';

const NotificationComponent = ({ isVisible, message, status, toggleNotification }) =>
  <div className={`NotificationComponentBlock NotificationComponentBlock--${status}`} style={{ display: isVisible ? 'block' : 'none' }}>
    <div styleName="NotificationComponent">
      <div styleName="NotificationComponent-content">
        {message}
      </div>
    </div>
  </div>;

NotificationComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  toggleNotification: PropTypes.func.isRequired,
};

export default css(NotificationComponent, styles);
