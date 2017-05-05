import React from 'react';
import _ from 'lodash';

import checkoutMock from 'mocks/checkout';

const CheckoutSummaryComponent = () =>
  <div className="CheckoutSummaryComponentBlock">
    <div className="CheckoutSummaryComponent">
      {_.map(checkoutMock, (product, key) =>
        <div className="CheckoutSummaryComponent-item" key={key}>
          <div className="CheckoutSummaryComponent-item-image">
            <img src={product.image} alt="" />
          </div>
          <div className="CheckoutSummaryComponent-item-title">
            <p>{product.title}</p>
            <p><small>{product.description}</small></p>
          </div>
          <div className="CheckoutSummaryComponent-item-price">
            <p>{product.price} {APP_CURRENCY}</p>
          </div>
        </div>
      )}
    </div>
  </div>;

CheckoutSummaryComponent.propTypes = {
};

export default CheckoutSummaryComponent;
