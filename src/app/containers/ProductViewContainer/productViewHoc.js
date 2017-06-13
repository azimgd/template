import { connect } from 'react-redux';
import marked from 'marked';
import get from 'lodash/get';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty, allItemsAreFalsy } from 'utils/index';

const mapStateToProps = (state) => ({
  product: state.productsReducer.product,
  getProductRequest: state.productsReducer.actions.getProduct,
});

const mapDispatchToProps = {
  getProductRequest: actions.getProductRequest,
  getProductIdle: actions.getProductIdle,
};

const componentWillMount = (stateProps, dispatchProps, ownProps) => {
  dispatchProps.getProductRequest({ id: ownProps.params.id });
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getProductIdle();
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = allItemsAreFalsy([stateProps.getProductRequest.isLoading]);
  const isEmpty = isInputArrayContentEmpty([stateProps.product.data]);
  const productParsedToHtml = marked(get(stateProps.product, 'data.description', ''));
  return Object.assign({
    isLoading,
    isEmpty,
    productParsedToHtml,
    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductViewContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductViewContainer);
