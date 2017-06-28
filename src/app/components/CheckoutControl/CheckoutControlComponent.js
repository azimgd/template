import React from 'react';
import css from 'services/cssService';
import styles from 'components/CheckoutControl/_CheckoutControlComponent.scss';

const CheckoutControlComponent = () =>
  <div styleName="CheckoutControlComponentBlock">
    <div styleName="CheckoutControlComponent">
      <div styleName="CheckoutControlComponent-left">
        <div styleName="CheckoutControlComponent-left-total">
          Total amount 331 USD
        </div>
      </div>
      <div styleName="CheckoutControlComponent-right">
        <div styleName="CheckoutControlComponent-right-button">
          Checkout now
        </div>
      </div>
    </div>
  </div>;

CheckoutControlComponent.propTypes = {
};

export default css(CheckoutControlComponent, styles);
