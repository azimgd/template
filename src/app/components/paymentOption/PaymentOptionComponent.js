import React from 'react';

const PaymentOptionComponent = () =>
  <div className="PaymentOptionComponentBlock">
    <div className="PaymentOptionComponent">
      <div className="PaymentOptionComponent-title">
        Visa
      </div>
      <div className="PaymentOptionComponent-content">
        4242 4242 4242 4242
      </div>
    </div>
    <div className="PaymentOptionComponentBlock-button">
      Select
    </div>
  </div>;

PaymentOptionComponent.propTypes = {
};

export default PaymentOptionComponent;
