import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as actions from 'actions/index';
import { transformCategories, getFailedNotifications, getSucceededNotifications, filterSubCategories } from 'utils/index';

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

export default (PageFormContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageFormContainer);
