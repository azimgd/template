import React, { PropTypes } from 'react';

const ProductComponent = ({ product }) =>
  <div className="ProductComponent">
    <div className="ProductComponent-title">
      {product.title}
    </div>
    <div className="ProductComponent-description">
      {product.description}
    </div>
    <div className="ProductComponent-price">
      {product.price}
    </div>
  </div>;

ProductComponent.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductComponent;
