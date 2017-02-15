import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty } from 'utils/index';
import { mapProductsToSubAndCategories } from 'services/productsService';

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  productCategories: state.productCategoriesReducer.productCategories,
  productSubCategories: state.productSubCategoriesReducer.productSubCategories,
});

const mapDispatchToProps = {
  getProductsRequest: actions.getProductsRequest,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductSubCategoriesRequest: actions.getProductSubCategoriesRequest,
  getProductsIdle: actions.getProductsIdle,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
  getProductSubCategoriesIdle: actions.getProductSubCategoriesIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([stateProps.products.data]);
  const mappedProducts = mapProductsToSubAndCategories(stateProps.products.data, stateProps.productCategories.data, stateProps.productSubCategories.data);
  return Object.assign({
    isLoading,
    isEmpty,
    mappedProducts,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductsContainer);
