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
            {product.title}
          </div>
          <div className="CheckoutSummaryComponent-item-price">
            {product.price}
          </div>
        </div>
      )}
    </div>
  </div>;

CheckoutSummaryComponent.propTypes = {
};

export default CheckoutSummaryComponent;
