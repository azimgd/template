import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as actions from 'actions/index';
import { transformCategories, filterSubCategories } from 'services/categoriesService';
import { getFailedNotifications, getSucceededNotifications } from 'services/uiService';

const selector = formValueSelector('PageFormComponent');

const mapStateToProps = (state) => ({
  pageCategories: state.pageCategoriesReducer.pageCategories,
  pageSubCategories: state.pageSubCategoriesReducer.pageSubCategories,
  formCategoryId: selector(state, 'categoryId'),
  pagesActions: state.pagesReducer.actions,
});

const mapDispatchToProps = {
  postPageRequest: actions.postPageRequest,
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPageSubCategoriesRequest: actions.getPageSubCategoriesRequest,
  getPageCategoriesIdle: actions.getPageCategoriesIdle,
  getPageSubCategoriesIdle: actions.getPageSubCategoriesIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.pageCategories.data);
  const filteredSubCategories = filterSubCategories(stateProps.pageSubCategories.data, { categoryId: stateProps.formCategoryId });
  const mappedSubCategories = transformCategories(filteredSubCategories);
  const notificationsSuccess = getSucceededNotifications([
    stateProps.pagesActions.postPage,
  ]);
  const notificationsFailure = getFailedNotifications([
    stateProps.pagesActions.postPage,
  ]);
  return Object.assign({
    notificationsSuccess,
    notificationsFailure,
    mappedCategories,
    mappedSubCategories,
  }, ownProps, stateProps, dispatchProps);
};

export default (PageCreateContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageCreateContainer);
