import React, { PropTypes } from 'react';
import get from 'lodash/get';

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

export default ProductDetailsItemComponent;
