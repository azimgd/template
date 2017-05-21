import React, { PropTypes } from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import productDetailsHoc from 'components/productDetails/ProductDetailsHoc';
import ProductDetailsItemComponent from 'components/productDetails/ProductDetailsItemComponent';
import YoutubePlayerComponent from 'components/youtubePlayer/YoutubePlayerComponent';

const ProductDetailsComponent = ({ productOptions, youtubeOptions, productParsedToHtml }) => (
  <div className="ProductDetailsComponentBlock">
    <div className="ProductDetailsComponent">
      {!isEmpty(productOptions) ?
        <div className="ProductDetailsComponent-detailsBlock">
          <div className="ProductDetailsComponent-details">
            {map(productOptions, (options, key) =>
              <div className="ProductDetailsComponent-details-item" key={key}>
                <ProductDetailsItemComponent options={options} />
              </div>
            )}
          </div>
        </div>
      : null}

      <div className="ProductDetailsComponent-description">
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

export default productDetailsHoc(ProductDetailsComponent);
