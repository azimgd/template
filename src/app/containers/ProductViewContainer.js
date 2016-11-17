import React, { PropTypes } from 'react';

import productViewContainerHoc from 'hoc/productViewContainerHoc';
import ProductDetailsComponent from 'components/productDetails/ProductDetailsComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import ProductPriceComponent from 'components/productPrice/ProductPriceComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';

export class ProductViewContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.params;
    this.props.getProductRequest({ id });
  }

  render() {
    const { isLoading, isEmpty, product, productParsedToHtml } = this.props;
    return (
      <div className="ProductViewContainerBlock">
        <div className="ProductViewContainerBlock-title">
          <PageNavLocationComponent pageName={product.data.title} />
        </div>
        <div className="ProductViewContainer">
          <IsLoadingComponent isLoading={isLoading}>
            <IsEmptyComponent isEmpty={isEmpty}>
              <div className="ProductViewContainer-block">
                <div className="ProductViewContainer-block-left">
                  <ProductDetailsComponent product={product.data} productParsedToHtml={productParsedToHtml} />
                </div>
                <div className="ProductViewContainer-block-right">
                  <ProductPriceComponent product={product.data} />
                  <ProductAboutComponent product={product.data} />
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
  product: PropTypes.object.isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default productViewContainerHoc(ProductViewContainer);
