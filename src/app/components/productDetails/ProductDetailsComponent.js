import React, { PropTypes } from 'react';
import _ from 'lodash';

const ProductDetailsItemComponent = ({ options }) =>
  <div className="ProductDetailsItemComponent">
    <div className="ProductDetailsItemComponent-title">
      {options.key}:
    </div>
    <div className="ProductDetailsItemComponent-content">
      {options.value || 'unavailable'}
    </div>
  </div>;

ProductDetailsItemComponent.propTypes = {
  options: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

const ProductDetailsComponent = ({ productOptions, productParsedToHtml }) => (
  <div className="ProductDetailsComponentBlock">
    <div className="ProductDetailsComponent">
      <div className="ProductDetailsComponent-detailsBlock">
        <div className="ProductDetailsComponent-details">
          {_.map(productOptions, (options, key) =>
            <div className="ProductDetailsComponent-details-item" key={key}>
              <ProductDetailsItemComponent options={options} />
            </div>
          )}
        </div>
      </div>
      <div className="ProductDetailsComponent-description">
        <p dangerouslySetInnerHTML={{ __html: productParsedToHtml }} />
      </div>
    </div>
  </div>
);

ProductDetailsComponent.propTypes = {
  product: PropTypes.object.isRequired,
  productOptions: PropTypes.object.isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default ProductDetailsComponent;
