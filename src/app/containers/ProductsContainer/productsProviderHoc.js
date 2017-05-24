import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

const productsProviderHoc = (Component) => {
  class ProductsProviderHoc extends React.Component {
    constructor(props) {
      super(props);
      this.getFilteredProductsRequest = this.getFilteredProductsRequest.bind(this);
      this.getSearchedProductsRequest = this.getSearchedProductsRequest.bind(this);
    }

    componentWillUnmount() {
      this.props.getProductsIdle();
    }

    getFilteredProductsRequest(options) {
      return this.props.getProductsRequest({
        categoryId: this.props.location.query.categoryId,
        subCategoryId: this.props.location.query.subCategoryId,
        search: this.props.getProductsRequestMeta.meta.search,
        options,
      });
    }

    getSearchedProductsRequest({ search }) {
      return this.props.getProductsRequest({
        search,
        options: this.props.getProductsRequestMeta.meta.options,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          getFilteredProductsRequest={this.getFilteredProductsRequest}
          getSearchedProductsRequest={this.getSearchedProductsRequest}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    products: state.productsReducer.products,
    getProductsRequestMeta: state.productsReducer.actions.getProducts,
    distinctProductOptions: state.productOptionsReducer.distinctProductOptions,
  });

  const mapDispatchToProps = {
    getProductsRequest: actions.getProductsRequest,
    getProductsIdle: actions.getProductsIdle,
  };

  ProductsProviderHoc.propTypes = {
    getProductsRequest: PropTypes.func.isRequired,
    getProductsIdle: PropTypes.func.isRequired,
    location: PropTypes.shape({
      query: PropTypes.shape({
        categoryId: PropTypes.string,
        subCategoryId: PropTypes.string,
      }).isRequired,
    }).isRequired,
    getProductsRequestMeta: PropTypes.shape({
      meta: PropTypes.shape({
        options: PropTypes.array,
        search: PropTypes.array,
      }),
    }).isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ProductsProviderHoc);
};

export default productsProviderHoc;
