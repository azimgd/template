import { connect } from 'react-redux';
import marked from 'marked';
import _ from 'lodash';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  product: state.productsReducer.product,
});

const mapDispatchToProps = {
  getProductRequest: actions.getProductRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const productContents = _.get(stateProps.product, 'data.description', '');
  const productParsedToHtml = marked(productContents);
  return Object.assign({
    productParsedToHtml,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductFormContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductFormContainer);
