import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProductComponent = ({ product, height }) =>
  <div className="ProductComponent" style={{ height: `${height}px` }}>
    <div className="ProductComponent-title">
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </div>
    <div className="ProductComponent-image" style={{ backgroundImage: `url(${product.image})` }}></div>
    <div className="ProductComponent-description">
      {product.description}
    </div>
    <div className="ProductComponent-price">
      {product.price}
    </div>
  </div>;

ProductComponent.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  height: PropTypes.number,
};

export default ProductComponent;
