import React, { PropTypes } from 'react';
import isEmpty from 'lodash/isEmpty';
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
    this.props.getProductRequest({ id: this.props.params.id });
  }

  componentWillUnmount() {
    this.props.getProductIdle();
  }

  render() {
    return (
      <div className="ProductViewContainerBlock">
        <div className="ProductViewContainerBlock-title">
          <PageNavLocationComponent
            product={this.props.product.data}
            productCategory={this.props.product.data.category}
            productSubCategory={this.props.product.data.subcategory}
          />
        </div>
        <div className="ProductViewContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div className="ProductViewContainer-block">
                <div className="ProductViewContainer-block-full">
                  {!isEmpty(this.props.product.data.productImages) ?
                    <ProductGalleryComponent images={this.props.product.data.productImages} />
                  : null}
                </div>
                <div className="ProductViewContainer-block-left">
                  <ProductDetailsComponent
                    productOptions={this.props.product.data.options}
                    productParsedToHtml={this.props.productParsedToHtml}
                  />
                </div>
                <div className="ProductViewContainer-block-right">
                  <ProductPriceComponent product={this.props.product.data} />
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
  getProductIdle: PropTypes.func.isRequired,
  product: PropTypes.shape({
    data: PropTypes.object.isRequired,
  }).isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default productViewHoc(ProductViewContainer);
