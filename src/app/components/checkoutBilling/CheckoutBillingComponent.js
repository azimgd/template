import React from 'react';
import css from 'services/cssService';
import styles from 'components/CheckoutBilling/_CheckoutBillingComponent.scss';

import PaymentOptionComponent from 'components/PaymentOption/PaymentOptionComponent';

const CheckoutBillingComponent = () =>
  <div styleName="CheckoutBillingComponentBlock">
    <div styleName="CheckoutBillingComponent">
      <div styleName="CheckoutBillingComponent-item">
        <PaymentOptionComponent />
      </div>

      <div styleName="CheckoutBillingComponent-item">
        <PaymentOptionComponent />
      </div>

      <div styleName="CheckoutBillingComponent-item">
        <PaymentOptionComponent />
      </div>
    </div>
  </div>;

CheckoutBillingComponent.propTypes = {
};

export default css(CheckoutBillingComponent, styles);
