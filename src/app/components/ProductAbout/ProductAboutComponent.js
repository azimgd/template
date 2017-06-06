import React from 'react';
import 'components/ProductAbout/_ProductAboutComponent.scss';

const ProductAboutComponent = () =>
  <div className="ProductAboutComponent">
    <div className="ProductAboutComponent-item">
      <div className="ProductAboutComponent-item-title">
        Default sidebar title
      </div>
      <div className="ProductAboutComponent-item-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>;

ProductAboutComponent.propTypes = {
};

export default ProductAboutComponent;
