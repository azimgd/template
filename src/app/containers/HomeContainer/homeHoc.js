import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  pageCategories: state.pageCategoriesReducer.pageCategories,
  productCategories: state.productCategoriesReducer.productCategories,
});

const mapDispatchToProps = {
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPageCategoriesIdle: actions.getPageCategoriesIdle,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([
    stateProps.productCategories.data,
    stateProps.pageCategories.data,
  ]);
  return Object.assign({
    isLoading,
    isEmpty,
  }, ownProps, stateProps, dispatchProps);
};

export default (ConfigCategoriesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ConfigCategoriesContainer);
