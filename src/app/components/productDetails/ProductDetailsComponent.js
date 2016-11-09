import React, { PropTypes } from 'react';
import _ from 'lodash';

const ProductDetailsItemComponent = ({ details }) =>
  <div className="ProductDetailsItemComponent">
    <div className="ProductDetailsItemComponent-title">
      {details.title}:
    </div>
    <div className="ProductDetailsItemComponent-content">
      {details.content}
    </div>
  </div>;

ProductDetailsItemComponent.propTypes = {
  details: PropTypes.object.isRequired,
};

const ProductDetailsComponent = ({ product }) => {
  const productDetails = [
    { title: 'Id', content: product.id },
    { title: 'City', content: product.productCity },
    { title: 'Category', content: product.category },
    { title: 'SubCategory', content: product.subCategory },
  ];
  return (
    <div className="ProductDetailsComponentBlock">
      <div className="ProductDetailsComponent">
        <div className="ProductDetailsComponent-image">
          <img src="//placehold.it/600x400" alt="" />
        </div>
        <div className="ProductDetailsComponent-detailsBlock">
          <div className="ProductDetailsComponent-details">
          {_.map(productDetails, (details, key) =>
            <div className="ProductDetailsComponent-details-item" key={key}>
              <ProductDetailsItemComponent details={details} />
            </div>
          )}
          </div>
        </div>
        <div className="ProductDetailsComponent-description">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

ProductDetailsComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetailsComponent;
