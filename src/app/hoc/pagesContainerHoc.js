import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  pages: state.pagesReducer.pages,
});

const mapDispatchToProps = {
  getPagesRequest: actions.getPagesRequest,
};

export default (PagesContainer) => connect(mapStateToProps, mapDispatchToProps)(PagesContainer);
