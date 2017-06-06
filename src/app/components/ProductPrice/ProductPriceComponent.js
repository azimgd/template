import React, { PropTypes } from 'react';
import 'components/ProductPrice/_ProductPriceComponent.scss';

import { ButtonIconComponent } from 'components/Icons/IconsComponent';

const ProductPriceComponent = ({ product }) =>
  <div className="ProductPriceComponentBlock">
    <div className="ProductPriceComponent">
      <div className="ProductPriceComponent-price">
        {product.price} {APP_CURRENCY}
      </div>
      <div className="ProductPriceComponent-more">
        <strong>15% OFF</strong> until Jun 15
      </div>
    </div>
    <div className="ProductPriceComponentBlock-button">
      <ButtonIconComponent name="IoCash" /> Buy now
    </div>
  </div>;

ProductPriceComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPriceComponent;
