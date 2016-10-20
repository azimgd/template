import React from 'react';

import ProductFormComponent from 'components/productForm/ProductFormComponent';
import ProductFormControlComponent from 'components/productFormControl/ProductFormControlComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';

const ProductFormContainer = () =>
  <div className="ProductFormContainerBlock">
    <div className="ProductFormContainerBlock-title">
      Products page 123
    </div>
    <div className="ProductFormContainer">
      <div className="ProductFormContainer-block">
        <div className="ProductFormContainer-block-left">
          <ProductFormComponent />
        </div>
        <div className="ProductFormContainer-block-right">
          <ProductAboutComponent />
        </div>
      </div>
    </div>
    <ProductFormControlComponent />
  </div>;

export default ProductFormContainer;
