import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import get from 'lodash/get';
import configMock from 'mocks/config';
import { ButtonIconComponent } from 'components/icons/IconsComponent';

const ProductComponent = ({ product, height }) =>
  <div className="ProductComponentBlock">
    <div className="ProductComponent">
      <Link to={`/products/${product.id}`}>
        <div className="ProductComponent-image" style={{ backgroundImage: `url(${get(product, 'productImages[0].amazonUrl', configMock.productComponentThumb)})` }}>
          <div className="ProductComponent-image-price">{product.price}</div>
        </div>
      </Link>

      <div className="ProductComponent-content" style={{ height: `${height}px` }}>
        <div className="ProductComponent-content-title">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </div>
        <div className="ProductComponent-content-category">
          {get(product, 'category.name')}
          {get(product, 'category.name') && get(product, 'subcategory.name') ? ' / ' : null}
          {get(product, 'subcategory.name')}
        </div>
      </div>
      <div className="ProductComponent-button">
        <Link to={`/products/${product.id}`}><ButtonIconComponent name="IoAndroidAdd" /> Add to cart</Link>
      </div>
    </div>
  </div>;

ProductComponent.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.object.isRequired,
    subcategory: PropTypes.object.isRequired,
  }).isRequired,
  height: PropTypes.number,
};

export default ProductComponent;
