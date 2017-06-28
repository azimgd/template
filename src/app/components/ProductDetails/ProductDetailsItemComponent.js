import React, { PropTypes } from 'react';
import css from 'services/cssService';

import styles from 'components/ProductDetails/_ProductDetailsComponent.scss';
import get from 'lodash/get';

const ProductDetailsItemComponent = ({ options }) =>
  <div styleName="ProductDetailsItemComponent">
    <div styleName="ProductDetailsItemComponent-title">
      {get(options, 'key')}:
    </div>
    <div styleName="ProductDetailsItemComponent-content">
      {get(options, 'value', 'unavailable')}
    </div>
  </div>;

ProductDetailsItemComponent.propTypes = {
  options: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default css(ProductDetailsItemComponent, styles);
