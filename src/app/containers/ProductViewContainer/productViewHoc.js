import { connect } from 'react-redux';
import marked from 'marked';
import _ from 'lodash';
import * as actions from 'actions/index';
import { mapProductOptions, isInputArrayContentEmpty, mapProductImagesToAmazonUrl } from 'utils/index';

const mapStateToProps = (state) => ({
  product: state.productsReducer.product,
  productImages: state.productImagesReducer.productImages,
  productOptions: state.productOptionsReducer.productOptions,
});

const mapDispatchToProps = {
  getProductRequest: actions.getProductRequest,
  getProductImagesRequest: actions.getProductImagesRequest,
  getProductIdle: actions.getProductIdle,
  getProductImagesIdle: actions.getProductImagesIdle,
  getProductOptionsRequest: actions.getProductOptionsRequest,
  getProductOptionsIdle: actions.getProductOptionsIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([stateProps.product.data]);
  const mappedProductImages = mapProductImagesToAmazonUrl(stateProps.productImages.data);
  const mappedProductOptions = mapProductOptions(stateProps.product.data, stateProps.productOptions.data);
  const productContents = _.get(stateProps.product, 'data.description', '');
  const productParsedToHtml = marked(productContents);
  return Object.assign({
    isLoading,
    isEmpty,
    productParsedToHtml,
    mappedProductImages,
    mappedProductOptions,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductViewContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductViewContainer);
