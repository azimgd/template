import React, { PropTypes } from 'react';
import 'components/PageNavLocation/_PageNavLocationComponent.scss';

import { Link } from 'react-router';

const PageNavLocationComponent = ({ product, productCategory, productSubCategory }) =>
  <div className="PageNavLocationComponentBlock">
    <div className="PageNavLocationComponent">
      <div className="PageNavLocationComponent-title">
        {product.title}
      </div>
      <div className="PageNavLocationComponent-content">
        {productCategory ?
          <div className="PageNavLocationComponent-content-item">
            <Link to={{ pathname: '/products', query: { categoryId: productCategory.id } }}>{productCategory.name}</Link>
          </div>
        : null}
        {productSubCategory ?
          <div className="PageNavLocationComponent-content-item">
            <Link to={{ pathname: '/products', query: { subCategoryId: productSubCategory.id } }}>{productSubCategory.name}</Link>
          </div>
        : null}
      </div>
    </div>
  </div>;

PageNavLocationComponent.propTypes = {
  product: PropTypes.object.isRequired,
  productCategory: PropTypes.object.isRequired,
  productSubCategory: PropTypes.object.isRequired,
};

export default PageNavLocationComponent;
