import React, { PropTypes } from 'react';
import 'scss/components/_CartDropdownItemComponent.scss';

const CartDropdownItemComponent = () =>
  <div className="CartDropdownItemComponentBlock">
    <div className="CartDropdownItemComponent">
      <div className="CartDropdownItemComponent-left">
        <img src="/build/images/defaultone.jpg" alt="" />
      </div>
      <div className="CartDropdownItemComponent-right">
        1 x L size product
      </div>
    </div>
  </div>;

CartDropdownItemComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartDropdownItemComponent;
