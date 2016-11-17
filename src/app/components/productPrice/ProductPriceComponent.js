import React, { PropTypes } from 'react';
import { ButtonIcon } from 'components/icons/IconsComponent';

const ProductPriceComponent = ({ product }) =>
  <div className="ProductPriceComponentBlock">
    <div className="ProductPriceComponent">
      <div className="ProductPriceComponent-price">
        {product.price}
      </div>
      <div className="ProductPriceComponent-more">
        <strong>15% OFF</strong> until october 30
      </div>
    </div>
    <div className="ProductPriceComponentBlock-button">
      <ButtonIcon name="IoCash" /> Buy now
    </div>
  </div>;

ProductPriceComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPriceComponent;
