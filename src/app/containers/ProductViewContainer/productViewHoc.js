import { connect } from 'react-redux';
import marked from 'marked';
import get from 'lodash/get';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  product: state.productsReducer.product,
});

const mapDispatchToProps = {
  getProductRequest: actions.getProductRequest,
  getProductIdle: actions.getProductIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([stateProps.product.data]);
  const productParsedToHtml = marked(get(stateProps.product, 'data.description', ''));
  return Object.assign({
    isLoading,
    isEmpty,
    productParsedToHtml,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductViewContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductViewContainer);
