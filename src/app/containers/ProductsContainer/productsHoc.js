import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty, allItemsAreFalsy } from 'utils/index';

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  getProductsRequest: state.productsReducer.actions.getProducts,
  distinctProductOptions: state.productOptionsReducer.distinctProductOptions,
});

const mapDispatchToProps = {
  getProductsRequest: actions.getProductsRequest,
  getProductsIdle: actions.getProductsIdle,
  getDistinctProductOptionsRequest: actions.getDistinctProductOptionsRequest,
  getDistinctProductOptionsIdle: actions.getDistinctProductOptionsIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = allItemsAreFalsy([stateProps.getProductsRequest.isLoading]);
  const isEmpty = isInputArrayContentEmpty([stateProps.products.data]);
  return Object.assign({
    isLoading,
    isEmpty,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductsContainer);
