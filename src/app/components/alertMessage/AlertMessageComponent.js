import React, { PropTypes } from 'react';
import 'scss/components/_AlertMessageComponent.scss';

const AlertMessageComponent = ({ isVisible, toggleAlertMessage }) =>
  <div className="AlertMessageComponentBlock" style={{ display: isVisible ? 'block' : 'none' }}>
    <div className="AlertMessageComponent">
      <div className="AlertMessageComponent-title">
        <div className="AlertMessageComponent-title-left">
          Hello there!
        </div>
        <div className="AlertMessageComponent-title-right">
          <button onClick={toggleAlertMessage}>(x)</button>
        </div>
      </div>
      <div className="AlertMessageComponent-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dolores, cum distinctio. Recusandae, eos tenetur, vel facere expedita deleniti amet esse, atque dicta officia blanditiis rerum numquam consequatur dignissimos, minima!
      </div>
    </div>
  </div>;

AlertMessageComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleAlertMessage: PropTypes.func.isRequired,
};

export default AlertMessageComponent;
