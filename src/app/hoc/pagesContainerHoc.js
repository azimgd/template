import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  pages: state.pagesReducer.pages,
  pageCategories: state.pageCategoriesReducer.pageCategories,
});

const mapDispatchToProps = {
  getPagesRequest: actions.getPagesRequest,
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([stateProps.pages.data]);
  return Object.assign({
    isLoading,
    isEmpty,
  }, ownProps, stateProps, dispatchProps);
};

export default (PagesContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PagesContainer);
