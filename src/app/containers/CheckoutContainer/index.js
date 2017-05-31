import React from 'react';
import 'containers/CheckoutContainer/_CheckoutContainer.scss';

import CheckoutSummaryComponent from 'components/CheckoutSummary/CheckoutSummaryComponent';
import CheckoutUserInfoComponent from 'components/CheckoutUserInfo/CheckoutUserInfoComponent';
import CheckoutBillingComponent from 'components/CheckoutBilling/CheckoutBillingComponent';
import CheckoutControlComponent from 'components/CheckoutControl/CheckoutControlComponent';
import flow from 'lodash/flow';

const CheckoutContainer = () =>
  <div className="CheckoutContainerBlock">
    <div className="CheckoutContainerBlock-title">Checkout</div>

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

export const propTypes = {
};

CheckoutContainer.propTypes = propTypes;
export const init = flow();
export default init(CheckoutContainer);
