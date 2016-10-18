import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProductComponent = ({ product, height }) =>
  <div className="ProductComponent">
    <Link to={`/products/${product.id}`}>
      <div className="ProductComponent-image" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="ProductComponent-image-price">{product.price}</div>
      </div>
    </Link>

    <div className="ProductComponent-content" style={{ height: `${height}px` }}>
      <div className="ProductComponent-content-title">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </div>
      <div className="ProductComponent-content-description">
        {product.description}
      </div>
    </div>
    <div className="ProductComponent-button">
      <Link to={`/products/${product.id}`}>Add to cart</Link>
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
