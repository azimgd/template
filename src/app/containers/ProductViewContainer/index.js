import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/ProductViewContainer/_ProductViewContainer.scss';

import isEmpty from 'lodash/isEmpty';
import productViewHoc from 'containers/ProductViewContainer/productViewHoc';
import ProductDetailsComponent from 'components/ProductDetails/ProductDetailsComponent';
import ProductAboutComponent from 'components/ProductAbout/ProductAboutComponent';
import ProductGalleryComponent from 'components/ProductGallery/ProductGalleryComponent';
import ProductPriceComponent from 'components/ProductPrice/ProductPriceComponent';
import PageNavLocationComponent from 'components/PageNavLocation/PageNavLocationComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import flow from 'lodash/flow';

export class ProductViewContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div styleName="block">
        <div styleName="title">
          <PageNavLocationComponent
            product={this.props.product.data}
            productCategory={this.props.product.data.category}
            productSubCategory={this.props.product.data.subcategory}
          />
        </div>
        <div styleName="component">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div styleName="component-block">
                <div styleName="component-block-full">
                  {!isEmpty(this.props.product.data.productImages) ?
                    <ProductGalleryComponent images={this.props.product.data.productImages} />
                  : null}
                </div>
                <div styleName="component-block-left">
                  <ProductDetailsComponent
                    productOptions={this.props.product.data.options}
                    productParsedToHtml={this.props.productParsedToHtml}
                  />
                </div>
                <div styleName="component-block-right">
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

export const propTypes = {
  componentWillMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
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

ProductViewContainer.propTypes = propTypes;
export const init = flow([productViewHoc]);
export default init(css(ProductViewContainer, styles));
