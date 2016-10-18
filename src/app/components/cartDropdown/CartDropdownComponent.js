import React, { PropTypes } from 'react';

import CartDropdownItemComponent from 'components/cartDropdownItem/CartDropdownItemComponent';

const CartDropdownComponent = ({ cartPosition, isVisible }) =>
  <div className="CartDropdownComponentBlock" style={{ left: `${cartPosition.left}px`, top: `${cartPosition.top}px`, display: isVisible ? 'block' : 'none' }}>
    <div className="CartDropdownComponentBlock-triangle">
      <div className="triangleUp"></div>
    </div>
    <div className="CartDropdownComponentBlock-title">
      Cart items
    </div>
    <div className="CartDropdownComponent">
      <div className="CartDropdownComponent-item">
        <CartDropdownItemComponent />
      </div>
      <div className="CartDropdownComponent-item">
        <CartDropdownItemComponent />
      </div>
    </div>
    <div className="CartDropdownComponentBlock-summary">
      Total: 232 USD
    </div>
  </div>;

CartDropdownComponent.propTypes = {
  cartPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default CartDropdownComponent;
