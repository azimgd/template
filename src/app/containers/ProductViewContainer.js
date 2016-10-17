import React from 'react';

import ProductDetailsComponent from 'components/productDetails/ProductDetailsComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';

const ProductViewContainer = () =>
  <div className="ProductViewContainerBlock">
    <div className="ProductViewContainerBlock-title">
      Products page 123
    </div>
    <div className="ProductViewContainer">
      <div className="ProductViewContainer-left">
        <ProductDetailsComponent />
      </div>
      <div className="ProductViewContainer-right">
        <ProductAboutComponent />
      </div>
    </div>
  </div>;

export default ProductViewContainer;
