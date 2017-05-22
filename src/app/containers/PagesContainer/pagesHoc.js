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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = allItemsAreFalsy([stateProps.getPagesRequest.isLoading]);
  const isEmpty = isInputArrayContentEmpty([stateProps.pages.data]);
  return Object.assign({
    isLoading,
    isEmpty,
  }, ownProps, stateProps, dispatchProps);
};

export default (PagesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PagesContainer);
