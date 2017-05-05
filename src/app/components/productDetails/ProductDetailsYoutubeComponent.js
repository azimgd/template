import React, { PropTypes } from 'react';
import get from 'lodash/get';

const ProductDetailsYoutubeComponent = ({ options }) =>
  <div className="ProductDetailsYoutubeComponent">
    <iframe
      src={`${get(options, 'value', 'unavailable')}`}
      frameBorder="0"
      allowFullScreen
    />
  </div>;

ProductDetailsYoutubeComponent.propTypes = {
  options: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default ProductDetailsYoutubeComponent;
