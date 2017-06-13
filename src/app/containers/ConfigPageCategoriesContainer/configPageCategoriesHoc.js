import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { transformCategories } from 'services/categoriesService';
import { getFailedNotifications, getSucceededNotifications } from 'services/uiService';

const mapStateToProps = (state) => ({
  pageCategories: state.pageCategoriesReducer.pageCategories,
  pageSubCategories: state.pageSubCategoriesReducer.pageSubCategories,
  pageCategoriesActions: state.pageCategoriesReducer.actions,
  pageSubCategoriesActions: state.pageSubCategoriesReducer.actions,
});

const mapDispatchToProps = {
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPageSubCategoriesRequest: actions.getPageSubCategoriesRequest,
  getPageCategoriesIdle: actions.getPageCategoriesIdle,
  getPageSubCategoriesIdle: actions.getPageSubCategoriesIdle,
  postPageCategoryRequest: actions.postPageCategoryRequest,
  postPageSubCategoryRequest: actions.postPageSubCategoryRequest,
};

const componentWillMount = (stateProps, dispatchProps) => {
  dispatchProps.getPageCategoriesRequest();
  dispatchProps.getPageSubCategoriesRequest();
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getPageCategoriesIdle();
  dispatchProps.getPageSubCategoriesIdle();
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
    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (ConfigCategoriesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ConfigCategoriesContainer);
