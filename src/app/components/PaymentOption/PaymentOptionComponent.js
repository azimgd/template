import React from 'react';
import css from 'services/cssService';
import styles from 'components/PaymentOption/_PaymentOptionComponent.scss';

const PaymentOptionComponent = () =>
  <div styleName="PaymentOptionComponentBlock">
    <div styleName="PaymentOptionComponent">
      <div styleName="PaymentOptionComponent-title">
        Visa
      </div>
      <div styleName="PaymentOptionComponent-content">
        4242 4242 4242 4242
      </div>
    </div>
    <div styleName="PaymentOptionComponentBlock-button">
      Select
    </div>
  </div>;

PaymentOptionComponent.propTypes = {
};

export default css(PaymentOptionComponent, styles);
