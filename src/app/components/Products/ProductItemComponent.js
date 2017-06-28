import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Products/_ProductItemComponent.scss';

import { Link } from 'react-router';
import get from 'lodash/get';
import configMock from 'mocks/config';
import { ButtonIconComponent } from 'components/Icons/IconsComponent';
import productsResizeHoc from 'components/Products/productsResizeHoc';

const ProductItemComponent = ({ product, height }) =>
  <div styleName="block">
    <div styleName="component">
      <Link to={`/products/${product.id}`}>
        <div styleName="component-image" style={{ backgroundImage: `url(${get(product, 'productImages[0].amazonUrl', configMock.productComponentThumb)})` }}>
          <div styleName="component-image-price">{product.price} {APP_CURRENCY}</div>
        </div>
      </Link>

      <div styleName="component-content" style={{ height: `${height}px` }}>
        <div styleName="component-content-title">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </div>

        <div styleName="component-content-category">
          {get(product, 'category.name')}
          {get(product, 'category.name') && get(product, 'subcategory.name') ? ' / ' : null}
          {get(product, 'subcategory.name')}
        </div>
      </div>

      <div styleName="component-button">
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

export default productsResizeHoc(css(ProductItemComponent, styles));
