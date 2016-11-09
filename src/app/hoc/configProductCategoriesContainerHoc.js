import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { transformCategories } from 'utils/index';

const mapStateToProps = (state) => ({
  productCategories: state.productCategoriesReducer.productCategories,
  productSubCategories: state.productSubCategoriesReducer.productSubCategories,
});

const mapDispatchToProps = {
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductSubCategoriesRequest: actions.getProductSubCategoriesRequest,
  postProductCategoryRequest: actions.postProductCategoryRequest,
  postProductSubCategoryRequest: actions.postProductSubCategoryRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.productCategories.data);
  return Object.assign({
    mappedCategories,
  }, ownProps, stateProps, dispatchProps);
};

export default (ConfigCategoriesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ConfigCategoriesContainer);
