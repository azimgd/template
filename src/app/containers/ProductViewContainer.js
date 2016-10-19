import React from 'react';

import ProductDetailsComponent from 'components/productDetails/ProductDetailsComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import ProductPriceComponent from 'components/productPrice/ProductPriceComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';

const ProductViewContainer = () =>
  <div className="ProductViewContainerBlock">
    <div className="ProductViewContainerBlock-title">
      <PageNavLocationComponent pageName="Products page 123" />
    </div>
    <div className="ProductViewContainer">
      <div className="ProductViewContainer-left">
        <ProductDetailsComponent />
      </div>
      <div className="ProductViewContainer-right">
        <ProductPriceComponent />
        <ProductAboutComponent />
      </div>
    </div>
  </div>;

export default ProductViewContainer;
