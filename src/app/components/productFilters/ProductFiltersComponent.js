import React, { PropTypes } from 'react';
import productFiltersHoc from 'components/productFilters/ProductFiltersHoc';
import ProductFilterItemComponent from 'components/productFilters/ProductFilterItemComponent';
import map from 'lodash/map';

const ProductFiltersComponent = ({ productFilters, setActiveItem }) =>
  <div className="ProductFiltersComponentBlock">
    <div className="ProductFiltersComponent">
      {map(productFilters, (filter, filterKey) =>
        <div className="ProductFiltersComponent-item" key={filterKey}>
          <div className="ProductFilterCategory">
            <div className="ProductFilterCategory-title">{filterKey}</div>
            <div className="ProductFilterCategory-filters">
              {map(filter, (option, optionKey) =>
                <div className="ProductFilterCategory-filters-item" key={optionKey}>
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

export default productFiltersHoc(ProductFiltersComponent);
