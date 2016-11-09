import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  pages: state.pagesReducer.pages,
  pageCategories: state.pageCategoriesReducer.pageCategories,
});

const mapDispatchToProps = {
  getPagesRequest: actions.getPagesRequest,
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
};

export default (PagesContainer) => connect(mapStateToProps, mapDispatchToProps)(PagesContainer);
