import React from 'react';

const ProductPriceComponent = () =>
  <div className="ProductPriceComponentBlock">
    <div className="ProductPriceComponent">
      <div className="ProductPriceComponent-price">
        300 USD
      </div>
      <div className="ProductPriceComponent-more">
        <strong>15% OFF</strong> until october 30
      </div>
    </div>
    <div className="ProductPriceComponentBlock-button">
      Buy now
    </div>
  </div>;

ProductPriceComponent.propTypes = {
};

export default ProductPriceComponent;
