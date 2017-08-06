import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductPrice/_ProductPriceComponent.scss';

import { ButtonIconComponent } from 'components/Icons/IconsComponent';

const ProductPriceComponent = ({ product }) =>
  <div styleName="ProductPriceComponentBlock">
    <div styleName="ProductPriceComponent">
      <div styleName="ProductPriceComponent-price">
        {product.price} {APP_CURRENCY}
      </div>
      <div styleName="ProductPriceComponent-more">
        <strong>15% OFF</strong> until Jun 15
      </div>
    </div>
    <div styleName="ProductPriceComponentBlock-button">
      <ButtonIconComponent name="usd" /> Buy now
    </div>
  </div>;

ProductPriceComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default css(ProductPriceComponent, styles);
