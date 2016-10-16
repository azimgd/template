import React from 'react';

import PaymentOptionComponent from 'components/paymentOption/PaymentOptionComponent';

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
