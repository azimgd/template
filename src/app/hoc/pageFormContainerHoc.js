import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  page: null,
});

const mapDispatchToProps = {
  createPage: null,
};

export default (PageFormContainer) => connect(mapStateToProps, mapDispatchToProps)(PageFormContainer);
