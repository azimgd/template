import React, { PropTypes } from 'react';

import productViewHoc from 'containers/ProductViewContainer/productViewHoc';
import ProductDetailsComponent from 'components/productDetails/ProductDetailsComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import ProductGalleryComponent from 'components/productGallery/ProductGalleryComponent';
import ProductPriceComponent from 'components/productPrice/ProductPriceComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';

export class ProductViewContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.params;
    this.props.getProductRequest({ id });
    this.props.getProductImagesRequest({ id });
    this.props.getProductOptionsRequest({ id });
    this.props.getProductCategoriesRequest();
    this.props.getProductSubCategoriesRequest();
  }

  componentWillUnmount() {
    this.props.getProductIdle();
    this.props.getProductImagesIdle();
    this.props.getProductOptionsIdle();
    this.props.getProductCategoriesIdle();
    this.props.getProductSubCategoriesIdle();
  }

  render() {
    return (
      <div className="ProductViewContainerBlock">
        <div className="ProductViewContainerBlock-title">
          <PageNavLocationComponent
            product={this.props.product.data}
            productCategory={this.props.productCategory}
            productSubCategory={this.props.productSubCategory}
          />
        </div>
        <div className="ProductViewContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div className="ProductViewContainer-block">
                <div className="ProductViewContainer-block-full">
                  {this.props.mappedProductImages.length ?
                    <ProductGalleryComponent images={this.props.mappedProductImages} />
                  : null}
                </div>
                <div className="ProductViewContainer-block-left">
                  <ProductDetailsComponent
                    productOptions={this.props.productOptions}
                    productParsedToHtml={this.props.productParsedToHtml}
                  />
                </div>
                <div className="ProductViewContainer-block-right">
                  <ProductPriceComponent product={this.props.product.data} />
                  <ProductAboutComponent product={this.props.product.data} />
                </div>
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

ProductViewContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  getProductRequest: PropTypes.func.isRequired,
  getProductImagesRequest: PropTypes.func.isRequired,
  getProductIdle: PropTypes.func.isRequired,
  getProductImagesIdle: PropTypes.func.isRequired,
  getProductOptionsRequest: PropTypes.func.isRequired,
  getProductOptionsIdle: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
  getProductCategoriesIdle: PropTypes.func.isRequired,
  getProductSubCategoriesIdle: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  productCategory: PropTypes.object.isRequired,
  productSubCategory: PropTypes.object.isRequired,
  productOptions: PropTypes.object.isRequired,
  mappedProductImages: PropTypes.object.isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default productViewHoc(ProductViewContainer);
