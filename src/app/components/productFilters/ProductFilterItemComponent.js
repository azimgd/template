import React, { PropTypes } from 'react';

const ProductFilterItemComponent = ({ title }) =>
  <div className="ProductFilterItemComponentBlock">
    <div className="ProductFilterItemComponent">
      {title}
    </div>
  </div>;

ProductFilterItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductFilterItemComponent;
