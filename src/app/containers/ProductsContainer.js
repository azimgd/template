import React, { PropTypes } from 'react';
import _ from 'lodash';

import productsContainerHoc from 'hoc/productsContainerHoc';
import productsResizeListener from 'hoc/ProductsResizeListener';
import ProductComponent from 'components/product/ProductComponent';

class ProductsContainer extends React.Component {
  componentWillMount() {
    this.props.getProductsRequest();
  }

  render() {
    const { maxHeight, products } = this.props;
    return (
      <div className="ProductsContainerBlock">
        <div className="ProductsContainerBlock-title">
          Products
        </div>

        <div className="ProductsContainer">
          <div className="ProductsContainer-products">
            {_.map(products.data, (product, key) =>
              <div key={key}><ProductComponent product={product} height={maxHeight} /></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
  maxHeight: PropTypes.number,
  getProductsRequest: PropTypes.func.isRequired,
};

export default productsResizeListener(
  productsContainerHoc(ProductsContainer)
);
