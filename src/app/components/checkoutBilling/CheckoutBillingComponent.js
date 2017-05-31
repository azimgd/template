import React from 'react';
import 'components/CheckoutBilling/_CheckoutBillingComponent.scss';

import PaymentOptionComponent from 'components/PaymentOption/PaymentOptionComponent';

const CheckoutBillingComponent = () =>
  <div className="CheckoutBillingComponentBlock">
    <div className="CheckoutBillingComponent">
      <div className="CheckoutBillingComponent-item">
        <PaymentOptionComponent />
      </div>

      <div className="CheckoutBillingComponent-item">
        <PaymentOptionComponent />
      </div>

      <div className="CheckoutBillingComponent-item">
        <PaymentOptionComponent />
      </div>
    </div>
  </div>;

CheckoutBillingComponent.propTypes = {
};

export default CheckoutBillingComponent;
