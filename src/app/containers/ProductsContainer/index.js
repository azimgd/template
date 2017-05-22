import React, { PropTypes } from 'react';

import productsHoc from 'containers/ProductsContainer/productsHoc';
import productsResizeListener from 'hoc/ProductsResizeListener';
import ProductComponent from 'components/product/ProductComponent';
import ProductFiltersComponent from 'components/productFilters/ProductFiltersComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';
import isEmpty from 'lodash/isEmpty';

export class ProductsContainer extends React.Component {
  componentWillMount() {
    const { categoryId, subCategoryId } = this.props.location.query;
    this.props.getDistinctProductOptionsRequest();
    this.props.getProductsRequest({ categoryId, subCategoryId });
    this.getFilteredProductsRequest = (options) => this.props.getProductsRequest({ options, categoryId, subCategoryId });
  }

  componentWillUnmount() {
    this.props.getDistinctProductOptionsIdle();
    this.props.getProductsIdle();
  }

  render() {
    return (
      <div className="ProductsContainerBlock">
        <div className="ProductsContainerBlock-title">Products</div>
        {!isEmpty(this.props.distinctProductOptions.data) ?
          <div className="ProductsContainerBlock-filters">
            <ProductFiltersComponent
              distinctProductOptions={this.props.distinctProductOptions}
              getFilteredProductsRequest={this.getFilteredProductsRequest}
            />
          </div>
        : null}

        <div className="ProductsContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div className="ProductsContainer-products">
                {this.props.products.data && this.props.products.data.map((product) =>
                  <div key={product.id}><ProductComponent product={product} height={this.props.maxHeight} /></div>
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
  location: PropTypes.shape({
    query: PropTypes.shape({
      categoryId: PropTypes.string,
      subCategoryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  products: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  distinctProductOptions: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  maxHeight: PropTypes.number.isRequired,
  getProductsRequest: PropTypes.func.isRequired,
  getProductsIdle: PropTypes.func.isRequired,
  getDistinctProductOptionsRequest: PropTypes.func.isRequired,
  getDistinctProductOptionsIdle: PropTypes.func.isRequired,
};

export default productsResizeListener(
  productsHoc(ProductsContainer)
);
