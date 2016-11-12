import React, { PropTypes } from 'react';

import productViewContainerHoc from 'hoc/productViewContainerHoc';
import ProductDetailsComponent from 'components/productDetails/ProductDetailsComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import ProductPriceComponent from 'components/productPrice/ProductPriceComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';

export class ProductViewContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.params;
    this.props.getProductRequest({ id });
  }

  render() {
    const { product, productParsedToHtml } = this.props;
    return (
      <div className="ProductViewContainerBlock">
        <div className="ProductViewContainerBlock-title">
          <PageNavLocationComponent pageName={product.data.title} />
        </div>
        <div className="ProductViewContainer">
          <div className="ProductViewContainer-block">
            <div className="ProductViewContainer-block-left">
              <ProductDetailsComponent product={product.data} productParsedToHtml={productParsedToHtml} />
            </div>
            <div className="ProductViewContainer-block-right">
              <ProductPriceComponent product={product.data} />
              <ProductAboutComponent product={product.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductViewContainer.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  getProductRequest: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default productViewContainerHoc(ProductViewContainer);
