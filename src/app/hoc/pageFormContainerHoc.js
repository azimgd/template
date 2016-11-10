import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { transformCategories } from 'utils/index';

const mapStateToProps = (state) => ({
  pageCategories: state.pageCategoriesReducer.pageCategories,
  pageSubCategories: state.pageSubCategoriesReducer.pageSubCategories,
});

const mapDispatchToProps = {
  postPageRequest: actions.postPageRequest,
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPageSubCategoriesRequest: actions.getPageSubCategoriesRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.pageCategories.data);
  const mappedSubCategories = transformCategories(stateProps.pageSubCategories.data);
  return Object.assign({
    mappedCategories,
    mappedSubCategories,
  }, ownProps, stateProps, dispatchProps);
};

export default (PageFormContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageFormContainer);
