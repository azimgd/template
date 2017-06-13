import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty, allItemsAreFalsy } from 'utils/index';

const mapStateToProps = (state) => ({
  pages: state.pagesReducer.pages,
  getPagesRequest: state.pagesReducer.actions.getPages,
  pageCategories: state.pageCategoriesReducer.pageCategories,
});

const mapDispatchToProps = {
  getPagesRequest: actions.getPagesRequest,
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPagesIdle: actions.getPagesIdle,
  getPageCategoriesIdle: actions.getPageCategoriesIdle,
};

const componentWillMount = (stateProps, dispatchProps, ownProps) => {
  const { categoryId, subCategoryId } = ownProps.location.query;
  dispatchProps.getPagesRequest({ categoryId, subCategoryId });
  dispatchProps.getPageCategoriesRequest();
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getPagesIdle();
  dispatchProps.getPageCategoriesIdle();
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = allItemsAreFalsy([stateProps.getPagesRequest.isLoading]);
  const isEmpty = isInputArrayContentEmpty([stateProps.pages.data]);
  return Object.assign({
    isLoading,
    isEmpty,
    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (PagesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PagesContainer);
