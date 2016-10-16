import React, { PropTypes } from 'react';
import _ from 'lodash';

import productsResizeListener from 'hoc/ProductsResizeListener';

import productsMock from 'mocks/products';
import ProductComponent from 'components/product/ProductComponent';

const ProductsContainer = ({ maxHeight }) =>
  <div className="ProductsContainerBlock">
    {_.map(productsMock, (product, key) =>
      <div key={key}><ProductComponent product={product} height={maxHeight} /></div>
    )}
  </div>;

ProductsContainer.propTypes = {
  maxHeight: PropTypes.number,
};

export default productsResizeListener(ProductsContainer);
