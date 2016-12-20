import React, { PropTypes } from 'react';

const ProductOptionsListComponent = ({ productOptions }) =>
  <div className="ProductOptionsListComponentBlock">
    <div className="ProductOptionsListComponentBlock-title">
      Available product options list
    </div>
    <div className="ProductOptionsListComponent">
      {productOptions && productOptions.map((productOption, key) =>
        <div className="ProductOptionsListComponent-item" key={key}>
          <div className="ProductOptionsListComponent-item-title">
            {productOption.key}
          </div>
          <div className="ProductOptionsListComponent-item-content">
            {productOption.value}
          </div>
          <div className="ProductOptionsListComponent-item-actions">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
      )}
    </div>
  </div>;

ProductOptionsListComponent.propTypes = {
  productOptions: PropTypes.array.isRequired,
};

export default ProductOptionsListComponent;
