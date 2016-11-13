import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { transformCategories, getFailedNotifications, getSucceededNotifications } from 'utils/index';

const mapStateToProps = (state) => ({
  pageCategories: state.pageCategoriesReducer.pageCategories,
  pageSubCategories: state.pageSubCategoriesReducer.pageSubCategories,
  pageCategoriesActions: state.pageCategoriesReducer.actions,
  pageSubCategoriesActions: state.pageSubCategoriesReducer.actions,
});

const mapDispatchToProps = {
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPageSubCategoriesRequest: actions.getPageSubCategoriesRequest,
  postPageCategoryRequest: actions.postPageCategoryRequest,
  postPageSubCategoryRequest: actions.postPageSubCategoryRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.pageCategories.data);
  const notificationsSuccess = getSucceededNotifications([
    stateProps.pageCategoriesActions.postPageCategory,
    stateProps.pageSubCategoriesActions.postPageSubCategory,
  ]);
  const notificationsFailure = getFailedNotifications([
    stateProps.pageCategoriesActions.postPageCategory,
    stateProps.pageSubCategoriesActions.postPageSubCategory,
  ]);
  return Object.assign({
    notificationsSuccess,
    notificationsFailure,
    mappedCategories,
  }, ownProps, stateProps, dispatchProps);
};

export default (ConfigCategoriesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ConfigCategoriesContainer);
