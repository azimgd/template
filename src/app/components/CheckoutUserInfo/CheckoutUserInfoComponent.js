import React from 'react';
import css from 'services/cssService';
import styles from 'components/CheckoutUserInfo/_CheckoutUserInfoComponent.scss';

const CheckoutUserInfoComponent = () =>
  <div styleName="CheckoutUserInfoComponentBlock">
    <div styleName="CheckoutUserInfoComponent">
      <div styleName="CheckoutUserInfoComponent-input">
        <label htmlFor="">First name</label>
        <input type="text" placeholder="First name" />
      </div>
      <div styleName="CheckoutUserInfoComponent-input">
        <label htmlFor="">Last name</label>
        <input type="text" placeholder="Last name" />
      </div>
      <div styleName="CheckoutUserInfoComponent-input">
        <label htmlFor="">Phone number</label>
        <input type="text" placeholder="Phone number" />
      </div>
      <div styleName="CheckoutUserInfoComponent-input">
        <label htmlFor="">Address</label>
        <input type="text" placeholder="Address" />
      </div>
      <div styleName="CheckoutUserInfoComponent-input">
        <label htmlFor="">City</label>
        <input type="text" placeholder="City" />
      </div>
    </div>
  </div>;

CheckoutUserInfoComponent.propTypes = {
};

export default css(CheckoutUserInfoComponent, styles);
