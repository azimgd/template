import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { transformCategories } from 'services/categoriesService';
import { getFailedNotifications, getSucceededNotifications } from 'services/uiService';

const mapStateToProps = (state) => ({
  productCategories: state.productCategoriesReducer.productCategories,
  productSubCategories: state.productSubCategoriesReducer.productSubCategories,
  productCategoriesActions: state.productCategoriesReducer.actions,
  productSubCategoriesActions: state.productSubCategoriesReducer.actions,
});

const mapDispatchToProps = {
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductSubCategoriesRequest: actions.getProductSubCategoriesRequest,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
  getProductSubCategoriesIdle: actions.getProductSubCategoriesIdle,
  postProductCategoryRequest: actions.postProductCategoryRequest,
  postProductSubCategoryRequest: actions.postProductSubCategoryRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.productCategories.data);
  const notificationsSuccess = getSucceededNotifications([
    stateProps.productCategoriesActions.postProductCategory,
    stateProps.productSubCategoriesActions.postProductSubCategory,
  ]);
  const notificationsFailure = getFailedNotifications([
    stateProps.productCategoriesActions.postProductCategory,
    stateProps.productSubCategoriesActions.postProductSubCategory,
  ]);
  return Object.assign({
    notificationsSuccess,
    notificationsFailure,
    mappedCategories,
  }, ownProps, stateProps, dispatchProps);
};

export default (ConfigCategoriesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ConfigCategoriesContainer);
