import React, { PropTypes } from 'react';
import 'scss/components/_CartDropdownComponent.scss';

/**
 * Using css -> visibility prop over css -> display on CartDropdownComponent
 * is must when calculating offsetWidth param
 */
const CartDropdownComponent = ({ children, cartPosition, isVisible }) =>
  <div className="CartDropdownComponentBlock" style={{ left: `${cartPosition.left}px`, top: `${cartPosition.top}px`, visibility: isVisible ? 'visible' : 'hidden' }}>
    <div className="CartDropdownComponentBlock-triangle">
      <div className="triangleUp" />
    </div>
    <div className="CartDropdownComponentBlock-title">
      Cart items
    </div>
    <div className="CartDropdownComponent">
      <div className="CartDropdownComponent-item">
        {children}
      </div>
    </div>
    <div className="CartDropdownComponentBlock-summary">
      Total: 232 USD
    </div>
  </div>;

CartDropdownComponent.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  cartPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default CartDropdownComponent;
