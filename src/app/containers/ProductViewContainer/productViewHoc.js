import { connect } from 'react-redux';
import marked from 'marked';
import _ from 'lodash';
import * as actions from 'actions/index';
import { mapProductImagesToAmazonUrl, mapProductOptions, findProductsCategory, findProductsSubCategory } from 'services/productsService';
import { isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  product: state.productsReducer.product,
  productImages: state.productImagesReducer.productImages,
  productOptions: state.productOptionsReducer.productOptions,
  productCategories: state.productCategoriesReducer.productCategories,
  productSubCategories: state.productSubCategoriesReducer.productSubCategories,
});

const mapDispatchToProps = {
  getProductRequest: actions.getProductRequest,
  getProductImagesRequest: actions.getProductImagesRequest,
  getProductIdle: actions.getProductIdle,
  getProductImagesIdle: actions.getProductImagesIdle,
  getProductOptionsRequest: actions.getProductOptionsRequest,
  getProductOptionsIdle: actions.getProductOptionsIdle,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductSubCategoriesRequest: actions.getProductSubCategoriesRequest,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
  getProductSubCategoriesIdle: actions.getProductSubCategoriesIdle,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([stateProps.product.data]);
  const mappedProductImages = mapProductImagesToAmazonUrl(stateProps.productImages.data);
  const mappedProductOptions = mapProductOptions(stateProps.product.data, stateProps.productOptions.data);
  const productCategory = findProductsCategory(stateProps.productCategories.data, stateProps.product.data);
  const productSubCategory = findProductsSubCategory(stateProps.productSubCategories.data, stateProps.product.data);
  const productParsedToHtml = marked(_.get(stateProps.product, 'data.description', ''));
  return Object.assign({
    isLoading,
    isEmpty,
    productParsedToHtml,
    mappedProductImages,
    mappedProductOptions,
    productCategory,
    productSubCategory,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductViewContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductViewContainer);
