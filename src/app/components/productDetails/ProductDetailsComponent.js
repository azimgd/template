import React, { PropTypes } from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

const ProductDetailsItemComponent = ({ options }) =>
  <div className="ProductDetailsItemComponent">
    <div className="ProductDetailsItemComponent-title">
      {get(options, 'key')}:
    </div>
    <div className="ProductDetailsItemComponent-content">
      {get(options, 'value', 'unavailable')}
    </div>
  </div>;

ProductDetailsItemComponent.propTypes = {
  options: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

const ProductDetailsComponent = ({ productOptions, productParsedToHtml }) => (
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
    </div>
  </div>
);

ProductDetailsComponent.propTypes = {
  productOptions: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default ProductDetailsComponent;
