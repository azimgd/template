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

const ProductDetailsComponent = ({ product, productParsedToHtml }) => {
  const productDetails = [
    { title: 'Id', content: product.id },
    { title: 'City', content: product.productCity },
    { title: 'Category', content: product.category },
    { title: 'SubCategory', content: product.subCategory },
  ];
  return (
    <div className="ProductDetailsComponentBlock">
      <div className="ProductDetailsComponent">
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
          <p dangerouslySetInnerHTML={{ __html: productParsedToHtml }} />
        </div>
      </div>
    </div>
  );
};

ProductDetailsComponent.propTypes = {
  product: PropTypes.object.isRequired,
  productParsedToHtml: PropTypes.string.isRequired,
};

export default ProductDetailsComponent;
