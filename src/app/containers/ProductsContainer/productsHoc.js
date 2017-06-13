import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty, allItemsAreFalsy } from 'utils/index';
import { getFormValues } from 'redux-form';

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  getProductsRequest: state.productsReducer.actions.getProducts,
  distinctProductOptions: state.productOptionsReducer.distinctProductOptions,
  searchForm: getFormValues('SearchComponent')(state),
});

const mapDispatchToProps = {
  getProductsRequest: actions.getProductsRequest,
  getProductsIdle: actions.getProductsIdle,
  getDistinctProductOptionsRequest: actions.getDistinctProductOptionsRequest,
  getDistinctProductOptionsIdle: actions.getDistinctProductOptionsIdle,
};

const componentWillMount = (stateProps, dispatchProps, ownProps) => {
  const { categoryId, subCategoryId } = ownProps.location.query;
  dispatchProps.getDistinctProductOptionsRequest();
  dispatchProps.getProductsRequest({ categoryId, subCategoryId });
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getDistinctProductOptionsIdle();
  dispatchProps.getProductsIdle();
};

const getProductsRequestModified = (stateProps, dispatchProps, ownProps) => {
  const { categoryId, subCategoryId } = ownProps.location.query;
  dispatchProps.getProductsRequest({
    categoryId,
    subCategoryId,
    offset: stateProps.getProductsRequest.meta.offset,
    limit: stateProps.getProductsRequest.meta.limit
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = allItemsAreFalsy([stateProps.getProductsRequest.isLoading]);
  const isEmpty = isInputArrayContentEmpty([stateProps.products.data]);
  return Object.assign({
    isLoading,
    isEmpty,
    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
    getProductsRequestModified: getProductsRequestModified.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductsContainer);
