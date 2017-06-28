import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/PageNavLocation/_PageNavLocationComponent.scss';

import { Link } from 'react-router';

const PageNavLocationComponent = ({ product, productCategory, productSubCategory }) =>
  <div styleName="PageNavLocationComponentBlock">
    <div styleName="PageNavLocationComponent">
      <div styleName="PageNavLocationComponent-title">
        {product.title}
      </div>
      <div styleName="PageNavLocationComponent-content">
        {productCategory ?
          <div styleName="PageNavLocationComponent-content-item">
            <Link to={{ pathname: '/products', query: { categoryId: productCategory.id } }}>{productCategory.name}</Link>
          </div>
        : null}
        {productSubCategory ?
          <div styleName="PageNavLocationComponent-content-item">
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

export default css(PageNavLocationComponent, styles);
