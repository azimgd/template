import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductFilters/_ProductFiltersComponent.scss';

import productFiltersHoc from 'components/ProductFilters/ProductFiltersHoc';
import ProductFilterItemComponent from 'components/ProductFilters/ProductFilterItemComponent';
import map from 'lodash/map';

const ProductFiltersComponent = ({ productFilters, setActiveItem }) =>
  <div styleName="ProductFiltersComponentBlock">
    <div styleName="ProductFiltersComponent">
      {map(productFilters, (filter, filterKey) =>
        <div styleName="ProductFiltersComponent-item" key={filterKey}>
          <div styleName="ProductFilterCategory">
            <div styleName="ProductFilterCategory-title">{filterKey}</div>
            <div styleName="ProductFilterCategory-filters">
              {map(filter, (option, optionKey) =>
                <div styleName="ProductFilterCategory-filters-item" key={optionKey}>
                  <ProductFilterItemComponent
                    filter={option}
                    setActiveItem={setActiveItem}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>;

ProductFiltersComponent.propTypes = {
  productFilters: PropTypes.shape({
  }).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default productFiltersHoc(css(ProductFiltersComponent, styles));
