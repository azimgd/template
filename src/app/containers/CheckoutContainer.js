import React from 'react';

import CheckoutSummaryComponent from 'components/checkoutSummary/CheckoutSummaryComponent';
import CheckoutUserInfoComponent from 'components/checkoutUserInfo/CheckoutUserInfoComponent';
import CheckoutBillingComponent from 'components/checkoutBilling/CheckoutBillingComponent';
import CheckoutControlComponent from 'components/checkoutControl/CheckoutControlComponent';
import { TitleIcon } from 'components/icons/IconsComponent';

const CheckoutContainer = () =>
  <div className="CheckoutContainerBlock">
    <div className="CheckoutContainerBlock-title">
      <TitleIcon name="IoBag" /> Checkout
    </div>

    <div className="CheckoutContainer">
      <div className="CheckoutContainer-summary">
        <CheckoutSummaryComponent />
      </div>
      <div className="CheckoutContainer-userInfo">
        <CheckoutUserInfoComponent />
      </div>
      <div className="CheckoutContainer-billing">
        <CheckoutBillingComponent />
      </div>
      <div className="CheckoutContainer-control">
        <CheckoutControlComponent />
      </div>
    </div>
  </div>;

export default CheckoutContainer;
