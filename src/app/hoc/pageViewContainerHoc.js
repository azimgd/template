import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  page: state.pagesReducer.page,
});

const mapDispatchToProps = {
  getPageRequest: actions.getPageRequest,
};

export default (PageViewContainer) => connect(mapStateToProps, mapDispatchToProps)(PageViewContainer);
