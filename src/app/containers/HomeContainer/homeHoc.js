import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { mapCategoriesToSubCategories, isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  pageCategories: state.pageCategoriesReducer.pageCategories,
  pageSubCategories: state.pageSubCategoriesReducer.pageSubCategories,
  productCategories: state.productCategoriesReducer.productCategories,
  productSubCategories: state.productSubCategoriesReducer.productSubCategories,
});

const mapDispatchToProps = {
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPageSubCategoriesRequest: actions.getPageSubCategoriesRequest,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductSubCategoriesRequest: actions.getProductSubCategoriesRequest,
  getPageCategoriesIdle: actions.getPageCategoriesIdle,
  getPageSubCategoriesIdle: actions.getPageSubCategoriesIdle,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
  getProductSubCategoriesIdle: actions.getProductSubCategoriesIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([
    stateProps.productCategories.data,
    stateProps.productSubCategories.data,
    stateProps.pageCategories.data,
    stateProps.pageSubCategories.data,
  ]);
  const mappedPageCategories = mapCategoriesToSubCategories(stateProps.pageCategories.data, stateProps.pageSubCategories.data);
  const mappedProductCategories = mapCategoriesToSubCategories(stateProps.productCategories.data, stateProps.productSubCategories.data);
  return Object.assign({
    isLoading,
    isEmpty,
    mappedProductCategories,
    mappedPageCategories,
  }, ownProps, stateProps, dispatchProps);
};

export default (ConfigCategoriesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ConfigCategoriesContainer);
