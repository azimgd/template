import React, { PropTypes } from 'react';

import productViewContainerHoc from 'hoc/productViewContainerHoc';
import ProductDetailsComponent from 'components/productDetails/ProductDetailsComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import ProductPriceComponent from 'components/productPrice/ProductPriceComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';

const ProductViewContainer = ({ product }) =>
  <div className="ProductViewContainerBlock">
    <div className="ProductViewContainerBlock-title">
      <PageNavLocationComponent pageName={product.productTitle} />
    </div>
    <div className="ProductViewContainer">
      <div className="ProductViewContainer-block">
        <div className="ProductViewContainer-block-left">
          <ProductDetailsComponent product={product} />
        </div>
        <div className="ProductViewContainer-block-right">
          <ProductPriceComponent product={product} />
          <ProductAboutComponent product={product} />
        </div>
      </div>
    </div>
  </div>;

ProductViewContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default productViewContainerHoc(ProductViewContainer);
