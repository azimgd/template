import React from 'react';

const CheckoutUserInfoComponent = () =>
  <div className="CheckoutUserInfoComponentBlock">
    <div className="CheckoutUserInfoComponent">
      <div className="CheckoutUserInfoComponent-input">
        <label htmlFor="">First name</label>
        <input type="text" placeholder="First name" />
      </div>
      <div className="CheckoutUserInfoComponent-input">
        <label htmlFor="">Last name</label>
        <input type="text" placeholder="Last name" />
      </div>
      <div className="CheckoutUserInfoComponent-input">
        <label htmlFor="">Phone number</label>
        <input type="text" placeholder="Phone number" />
      </div>
      <div className="CheckoutUserInfoComponent-input">
        <label htmlFor="">Address</label>
        <input type="text" placeholder="Address" />
      </div>
      <div className="CheckoutUserInfoComponent-input">
        <label htmlFor="">City</label>
        <input type="text" placeholder="City" />
      </div>
    </div>
  </div>;

CheckoutUserInfoComponent.propTypes = {
};

export default CheckoutUserInfoComponent;
