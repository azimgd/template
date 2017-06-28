import React, { PropTypes } from 'react';

const ProductFormControlComponent = ({ onClick }) =>
  <div styleName="ProductFormControlComponentBlock">
    <div styleName="ProductFormControlComponent">
      <div styleName="ProductFormControlComponent-left">
        <div styleName="ProductFormControlComponent-left-total">
          <a href="">Preview ad</a>
        </div>
      </div>
      <div styleName="ProductFormControlComponent-right">
        <button onClick={onClick} styleName="ProductFormControlComponent-right-button">
          Create now
        </button>
      </div>
    </div>
  </div>;

ProductFormControlComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ProductFormControlComponent;
