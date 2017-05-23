import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { allItemsAreFalsy } from 'utils/index';

const mapStateToProps = (state) => ({
  ui: state.uiReducer,
  getProductsRequest: state.productsReducer.actions.getProducts,
});

const mapDispatchToProps = {
  toggleCartDropdown: actions.toggleCartDropdown,
  toggleAlertMessage: actions.toggleAlertMessage,
  getProductsRequest: actions.getProductsRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const getProductsRequestIsLoading = allItemsAreFalsy([stateProps.getProductsRequest.isLoading]);
  return Object.assign({
    getProductsRequestIsLoading,
  }, ownProps, stateProps, dispatchProps);
};

export default (LayoutContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(LayoutContainer);
