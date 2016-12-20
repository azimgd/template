import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty, getSucceededNotifications, getFailedNotifications } from 'utils/index';

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
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductFormContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductFormContainer);
