import React from 'react';
import css from 'services/cssService';
import styles from 'containers/CheckoutContainer/_CheckoutContainer.scss';

import CheckoutSummaryComponent from 'components/CheckoutSummary/CheckoutSummaryComponent';
import CheckoutUserInfoComponent from 'components/CheckoutUserInfo/CheckoutUserInfoComponent';
import CheckoutBillingComponent from 'components/CheckoutBilling/CheckoutBillingComponent';
import CheckoutControlComponent from 'components/CheckoutControl/CheckoutControlComponent';
import flow from 'lodash/flow';

const CheckoutContainer = () =>
  <div styleName="CheckoutContainerBlock">
    <div styleName="CheckoutContainerBlock-title">Checkout</div>

    <div styleName="CheckoutContainer">
      <div styleName="CheckoutContainer-summary">
        <CheckoutSummaryComponent />
      </div>
      <div styleName="CheckoutContainer-userInfo">
        <CheckoutUserInfoComponent />
      </div>
      <div styleName="CheckoutContainer-billing">
        <CheckoutBillingComponent />
      </div>
      <div styleName="CheckoutContainer-control">
        <CheckoutControlComponent />
      </div>
    </div>
  </div>;

export const propTypes = {
};

CheckoutContainer.propTypes = propTypes;
export const init = flow();
export default init(css(CheckoutContainer, styles));
