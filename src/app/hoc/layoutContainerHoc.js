import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  ui: state.uiReducer,
});
const mapDispatchToProps = {
  toggleCartDropdown: actions.toggleCartDropdown,
};

export default (LayoutContainer) => connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
