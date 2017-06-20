import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/AlertMessage/_AlertMessageComponent.scss';

const AlertMessageComponent = ({ isVisible, toggleAlertMessage }) =>
  <div styleName="AlertMessageComponentBlock" style={{ display: isVisible ? 'block' : 'none' }}>
    <div styleName="AlertMessageComponent">
      <div styleName="AlertMessageComponent-title">
        <div styleName="AlertMessageComponent-title-left">
          Hello there!
        </div>
        <div styleName="AlertMessageComponent-title-right">
          <button onClick={toggleAlertMessage}>(x)</button>
        </div>
      </div>
      <div styleName="AlertMessageComponent-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dolores, cum distinctio. Recusandae, eos tenetur, vel facere expedita deleniti amet esse, atque dicta officia blanditiis rerum numquam consequatur dignissimos, minima!
      </div>
    </div>
  </div>;

AlertMessageComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleAlertMessage: PropTypes.func.isRequired,
};

export default css(AlertMessageComponent, styles);
