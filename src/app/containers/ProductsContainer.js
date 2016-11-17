import React, { PropTypes } from 'react';

import productsContainerHoc from 'hoc/productsContainerHoc';
import productsResizeListener from 'hoc/ProductsResizeListener';
import ProductComponent from 'components/product/ProductComponent';
import { TitleIcon } from 'components/icons/IconsComponent';

export class ProductsContainer extends React.Component {
  componentWillMount() {
    this.props.getProductsRequest();
    this.props.getProductCategoriesRequest();
  }

  render() {
    const { maxHeight, products } = this.props;
    return (
      <div className="ProductsContainerBlock">
        <div className="ProductsContainerBlock-title">
          <TitleIcon name="IoIosKeypad" /> Products
        </div>

        <div className="ProductsContainer">
          <div className="ProductsContainer-products">
            {products && products.data.map((product, key) =>
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
  getProductCategoriesRequest: PropTypes.func.isRequired,
};

export default productsResizeListener(
  productsContainerHoc(ProductsContainer)
);
