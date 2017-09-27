import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/CartDropdown/_CartDropdownComponent.scss';

/**
 * Using css -> visibility prop over css -> display on CartDropdownComponent
 * is must when calculating offsetWidth param
 */
const CartDropdownComponent = ({ children, cartPosition, isVisible }) =>
  <div styleName="CartDropdownComponentBlock" style={{ left: `${cartPosition.left}px`, top: `${cartPosition.top}px`, visibility: isVisible ? 'visible' : 'hidden' }}>
    <div styleName="CartDropdownComponentBlock-triangle">
      ^
    </div>
    <div styleName="CartDropdownComponentBlock-title">
      Cart items
    </div>
    <div styleName="CartDropdownComponent">
      <div styleName="CartDropdownComponent-item">
        {children}
      </div>
    </div>
    <div styleName="CartDropdownComponentBlock-summary">
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

CartDropdownComponent.defaultProps = {
  cartPosition: {},
};

export default css(CartDropdownComponent, styles);
