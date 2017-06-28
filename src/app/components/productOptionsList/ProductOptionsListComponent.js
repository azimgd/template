import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductOptionsList/_ProductOptionsListComponent.scss';

const ProductOptionsListComponent = ({ productOptions }) =>
  <div styleName="ProductOptionsListComponentBlock">
    <div styleName="ProductOptionsListComponentBlock-title">
      Available product options list
    </div>
    <div styleName="ProductOptionsListComponent">
      {productOptions && productOptions.map((productOption, key) =>
        <div styleName="ProductOptionsListComponent-item" key={key}>
          <div styleName="ProductOptionsListComponent-item-title">
            {productOption.key}
          </div>
          <div styleName="ProductOptionsListComponent-item-content">
            {productOption.value}
          </div>
          <div styleName="ProductOptionsListComponent-item-actions">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
      )}
    </div>
  </div>;

ProductOptionsListComponent.propTypes = {
  productOptions: PropTypes.array.isRequired,
};

export default css(ProductOptionsListComponent, styles);
