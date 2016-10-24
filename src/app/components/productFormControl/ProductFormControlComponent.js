import React, { PropTypes } from 'react';

const ProductFormControlComponent = ({ createProduct }) =>
  <div className="ProductFormControlComponentBlock">
    <div className="ProductFormControlComponent">
      <div className="ProductFormControlComponent-left">
        <div className="ProductFormControlComponent-left-total">
          <a href="">Preview ad</a>
        </div>
      </div>
      <div className="ProductFormControlComponent-right">
        <button onClick={createProduct} className="ProductFormControlComponent-right-button">
          Create now
        </button>
      </div>
    </div>
  </div>;

ProductFormControlComponent.propTypes = {
  createProduct: PropTypes.func.isRequired,
};

export default ProductFormControlComponent;
