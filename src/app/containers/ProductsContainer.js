import React, { PropTypes } from 'react';

import productsContainerHoc from 'hoc/productsContainerHoc';
import productsResizeListener from 'hoc/ProductsResizeListener';
import ProductComponent from 'components/product/ProductComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';

export class ProductsContainer extends React.Component {
  componentWillMount() {
    const { categoryId, subCategoryId } = this.props.location.query;
    this.props.getProductsRequest({ categoryId, subCategoryId });
    this.props.getProductCategoriesRequest();
  }

  render() {
    const { isLoading, isEmpty, maxHeight, products } = this.props;
    return (
      <div className="ProductsContainerBlock">
        <div className="ProductsContainerBlock-title">
          <TitleIconComponent name="IoIosKeypad" /> Products
        </div>

        <div className="ProductsContainer">
          <IsLoadingComponent isLoading={isLoading}>
            <IsEmptyComponent isEmpty={isEmpty}>
              <div className="ProductsContainer-products">
                {products && products.data.map((product, key) =>
                  <div key={key}><ProductComponent product={product} height={maxHeight} /></div>
                )}
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  maxHeight: PropTypes.number,
  getProductsRequest: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
};

export default productsResizeListener(
  productsContainerHoc(ProductsContainer)
);
