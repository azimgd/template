import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductDetails/_ProductDetailsComponent.scss';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import productDetailsHoc from 'components/ProductDetails/ProductDetailsHoc';
import ProductDetailsItemComponent from 'components/ProductDetails/ProductDetailsItemComponent';
import YoutubePlayerComponent from 'components/YoutubePlayer/YoutubePlayerComponent';

const ProductDetailsComponent = ({ productOptions, youtubeOptions, productParsedToHtml }) => (
  <div styleName="ProductDetailsComponentBlock">
    <div styleName="ProductDetailsComponent">
      {!isEmpty(productOptions) ?
        <div styleName="ProductDetailsComponent-detailsBlock">
          <div styleName="ProductDetailsComponent-details">
            {map(productOptions, (options, key) =>
              <div styleName="ProductDetailsComponent-details-item" key={key}>
                <ProductDetailsItemComponent options={options} />
              </div>
            )}
          </div>
        </div>
      : null}

      <div styleName="ProductDetailsComponent-description">
        <p dangerouslySetInnerHTML={{ __html: productParsedToHtml }} />
      </div>

      {!isEmpty(youtubeOptions) ?
        <div>
          <YoutubePlayerComponent youtubeOptions={youtubeOptions} />
        </div>
      : null}
    </div>
  </div>
);

ProductDetailsComponent.propTypes = {
  productOptions: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  youtubeOptions: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default productDetailsHoc(css(ProductDetailsComponent, styles));
