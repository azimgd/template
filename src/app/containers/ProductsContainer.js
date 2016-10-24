import React, { PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-hz';

import productsResizeListener from 'hoc/ProductsResizeListener';
import ProductComponent from 'components/product/ProductComponent';

const ProductsContainer = ({ maxHeight, products }) =>
  <div className="ProductsContainerBlock">
    <div className="ProductsContainerBlock-title">
      Checkout #123
    </div>

    <div className="ProductsContainer">
      <div className="ProductsContainer-products">
        {_.map(products, (product, key) =>
          <div key={key}><ProductComponent product={product} height={maxHeight} /></div>
        )}
      </div>
    </div>
  </div>;

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
  maxHeight: PropTypes.number,
};

const Container = connect(ProductsContainer, {
  subscriptions: {
    products: (hz) => hz('products'),
  },
});

export default productsResizeListener(Container);
