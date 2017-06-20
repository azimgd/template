import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Products/_ProductsComponent.scss';

import { Link } from 'react-router';
import get from 'lodash/get';
import configMock from 'mocks/config';
import { ButtonIconComponent } from 'components/Icons/IconsComponent';

const ProductItemComponent = ({ product, height }) =>
  <div styleName="ProductComponentBlock">
    <div styleName="ProductComponent">
      <Link to={`/products/${product.id}`}>
        <div styleName="ProductComponent-image" style={{ backgroundImage: `url(${get(product, 'productImages[0].amazonUrl', configMock.productComponentThumb)})` }}>
          <div styleName="ProductComponent-image-price">{product.price} {APP_CURRENCY}</div>
        </div>
      </Link>

      <div styleName="ProductComponent-content" style={{ height: `${height}px` }}>
        <div styleName="ProductComponent-content-title">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </div>
        <div styleName="ProductComponent-content-category">
          {get(product, 'category.name')}
          {get(product, 'category.name') && get(product, 'subcategory.name') ? ' / ' : null}
          {get(product, 'subcategory.name')}
        </div>
      </div>
      <div styleName="ProductComponent-button">
        <Link to={`/products/${product.id}`}><ButtonIconComponent name="IoAndroidAdd" /> Add to cart</Link>
      </div>
    </div>
  </div>;

ProductItemComponent.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.object.isRequired,
    subcategory: PropTypes.object.isRequired,
  }).isRequired,
  height: PropTypes.number,
};

export default css(ProductItemComponent, styles);
