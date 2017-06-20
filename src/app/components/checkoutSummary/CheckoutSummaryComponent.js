import React from 'react';
import css from 'services/cssService';
import styles from 'components/CheckoutSummary/_CheckoutSummaryComponent.scss';

import map from 'lodash/map';
import checkoutMock from 'mocks/checkout';

const CheckoutSummaryComponent = () =>
  <div styleName="CheckoutSummaryComponentBlock">
    <div styleName="CheckoutSummaryComponent">
      {map(checkoutMock, (product, key) =>
        <div styleName="CheckoutSummaryComponent-item" key={key}>
          <div styleName="CheckoutSummaryComponent-item-image">
            <img src={product.image} alt="" />
          </div>
          <div styleName="CheckoutSummaryComponent-item-title">
            <p>{product.title}</p>
            <p><small>{product.description}</small></p>
          </div>
          <div styleName="CheckoutSummaryComponent-item-price">
            <p>{product.price} {APP_CURRENCY}</p>
          </div>
        </div>
      )}
    </div>
  </div>;

CheckoutSummaryComponent.propTypes = {
};

export default css(CheckoutSummaryComponent, styles);
