import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
});

const mapDispatchToProps = {
  getProductsRequest: actions.getProductsRequest,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([stateProps.products.data]);
  return Object.assign({
    isLoading,
    isEmpty,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductsContainer);
