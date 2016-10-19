import React from 'react';

const CheckoutControlComponent = () =>
  <div className="CheckoutControlComponentBlock">
    <div className="CheckoutControlComponent">
      <div className="CheckoutControlComponent-left">
        <div className="CheckoutControlComponent-left-total">
          Total amount 331 USD
        </div>
      </div>
      <div className="CheckoutControlComponent-right">
        <div className="CheckoutControlComponent-right-button">
          Checkout now
        </div>
      </div>
    </div>
  </div>;

CheckoutControlComponent.propTypes = {
};

export default CheckoutControlComponent;
