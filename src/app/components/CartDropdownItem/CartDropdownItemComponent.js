import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/CartDropdownItem/_CartDropdownItemComponent.scss';

const CartDropdownItemComponent = () =>
  <div styleName="CartDropdownItemComponentBlock">
    <div styleName="CartDropdownItemComponent">
      <div styleName="CartDropdownItemComponent-left">
        <img src="/build/images/defaultone.jpg" alt="" />
      </div>
      <div styleName="CartDropdownItemComponent-right">
        1 x L size product
      </div>
    </div>
  </div>;

CartDropdownItemComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default css(CartDropdownItemComponent, styles);
