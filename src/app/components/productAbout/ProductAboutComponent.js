import React from 'react';
import css from 'services/cssService';
import styles from 'components/ProductAbout/_ProductAboutComponent.scss';

const ProductAboutComponent = () =>
  <div styleName="ProductAboutComponent">
    <div styleName="ProductAboutComponent-item">
      <div styleName="ProductAboutComponent-item-title">
        Default sidebar title
      </div>
      <div styleName="ProductAboutComponent-item-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>;

ProductAboutComponent.propTypes = {
};

export default css(ProductAboutComponent, styles);
