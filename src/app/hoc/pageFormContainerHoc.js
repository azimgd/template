import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  page: {},
});

const mapDispatchToProps = {
  createPage: actions.postPageRequest,
};

export default (PageFormContainer) => connect(mapStateToProps, mapDispatchToProps)(PageFormContainer);
