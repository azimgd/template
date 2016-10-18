import React, { PropTypes } from 'react';

const CartDropdownComponent = ({ cartPosition }) =>
  <div className="CartDropdownComponentBlock" style={{ left: `${cartPosition.left}px`, top: `${cartPosition.top}px` }}>
    <div className="CartDropdownComponentBlock-triangle">
      <div className="triangleUp"></div>
    </div>
    <div className="CartDropdownComponent">
      <div className="CartDropdownComponent-item">
        <div className="CartDropdownComponent-item-title">
          asd
        </div>
        <div className="CartDropdownComponent-item-content">
          asd
        </div>
      </div>
    </div>
  </div>;

CartDropdownComponent.propTypes = {
  cartPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
};

export default CartDropdownComponent;
