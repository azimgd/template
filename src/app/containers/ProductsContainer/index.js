import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/ProductsContainer/_ProductsContainer.scss';

import productsHoc from 'containers/ProductsContainer/productsHoc';
import productsProviderHoc from 'containers/ProductsContainer/productsProviderHoc';
import ProductsComponent from 'components/Products/ProductsComponent';
import ProductFiltersComponent from 'components/ProductFilters/ProductFiltersComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import isEmpty from 'lodash/isEmpty';
import flow from 'lodash/flow';

export class ProductsContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div styleName="block">
        <div styleName="title">Products</div>
        {!isEmpty(this.props.distinctProductOptions.data) ?
          <div styleName="block-filters">
            <ProductFiltersComponent
              distinctProductOptions={this.props.distinctProductOptions}
              getFilteredProductsRequest={this.props.getFilteredProductsRequest}
            />
          </div>
        : null}

        <div styleName="component">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>

              <div styleName="component-products">
                <ProductsComponent products={this.props.products} />
              </div>

              <div styleName="component-loadMore">
                <button onClick={this.props.getProductsRequestModified}>Load more</button>
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

export const propTypes = {
  componentWillMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      categoryId: PropTypes.string,
      subCategoryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  searchForm: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  products: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  distinctProductOptions: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  maxHeight: PropTypes.number.isRequired,
  getProductsRequest: PropTypes.func.isRequired,
  getProductsRequestModified: PropTypes.func.isRequired,
  getProductsIdle: PropTypes.func.isRequired,
  getDistinctProductOptionsRequest: PropTypes.func.isRequired,
  getDistinctProductOptionsIdle: PropTypes.func.isRequired,
  getFilteredProductsRequest: PropTypes.func.isRequired,
};

ProductsContainer.propTypes = propTypes;
export const init = flow([productsHoc, productsProviderHoc]);
export default init(css(ProductsContainer, styles));
