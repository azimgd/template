import React from 'react';
import _ from 'lodash';

const ProductDetailsItemComponent = () =>
  <div className="ProductDetailsItemComponent">
    <div className="ProductDetailsItemComponent-title">
      Modellår:
    </div>
    <div className="ProductDetailsItemComponent-content">
      1994
    </div>
  </div>;

const ProductDetailsComponent = () =>
  <div className="ProductDetailsComponentBlock">
    <div className="ProductDetailsComponent">
      <div className="ProductDetailsComponent-image">
        <img src="/build/images/defaultone.jpg" alt="" />
      </div>
      <div className="ProductDetailsComponent-detailsBlock">
        <div className="ProductDetailsComponent-details">
        {_.map([1, 2, 3, 4, 5], (item, key) =>
          <div className="ProductDetailsComponent-details-item" key={key}>
          <ProductDetailsItemComponent />
          </div>
        )}
        </div>
      </div>
      <div className="ProductDetailsComponent-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>;

ProductDetailsComponent.propTypes = {
};

export default ProductDetailsComponent;
