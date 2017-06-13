import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { getFailedNotifications, getSucceededNotifications } from 'services/uiService';
import { isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  product: state.productsReducer.product,
  productOptions: state.productOptionsReducer.productOptions,
  productOptionsActions: state.productOptionsReducer.actions,
});

const mapDispatchToProps = {
  postProductOptionRequest: actions.postProductOptionRequest,
  getProductRequest: actions.getProductRequest,
  getProductIdle: actions.getProductIdle,
  getProductOptionsRequest: actions.getProductOptionsRequest,
  getProductOptionsIdle: actions.getProductOptionsIdle,
};

const componentWillMount = (stateProps, dispatchProps, ownProps) => {
  dispatchProps.getProductRequest({ id: ownProps.params.id });
  dispatchProps.getProductOptionsRequest({ id: ownProps.params.id });
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getProductIdle();
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([stateProps.product.data]);
  const notificationsSuccess = getSucceededNotifications([
    stateProps.productOptionsActions.postProductOption,
  ]);
  const notificationsFailure = getFailedNotifications([
    stateProps.productOptionsActions.postProductOption,
  ]);

  return Object.assign({
    isLoading,
    isEmpty,
    notificationsSuccess,
    notificationsFailure,
    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductOptionsContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductOptionsContainer);
