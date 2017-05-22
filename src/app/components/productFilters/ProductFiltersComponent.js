import React, { PropTypes } from 'react';
import productFiltersHoc from 'components/productFilters/ProductFiltersHoc';
import ProductFilterItemComponent from 'components/productFilters/ProductFilterItemComponent';
import map from 'lodash/map';

const ProductFiltersComponent = ({ productFilters, setActiveItem }) =>
  <div className="ProductFiltersComponentBlock">
    {map(productFilters, (filter, filterKey) =>
      <div className="ProductFiltersComponent" key={filterKey}>
        <div className="ProductFiltersComponent-title">{filterKey}</div>
        <div className="ProductFiltersComponent-filters">
          {map(filter, (option, optionKey) =>
            <div className="ProductFiltersComponent-filters-item" key={optionKey}>
              <ProductFilterItemComponent
                filter={option}
                setActiveItem={setActiveItem}
              />
            </div>
          )}
        </div>
      </div>
    )}
  </div>;

ProductFiltersComponent.propTypes = {
  productFilters: PropTypes.shape({
  }).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default productFiltersHoc(ProductFiltersComponent);
