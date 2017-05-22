import React, { PropTypes } from 'react';
import filter from 'lodash/filter';

const productFiltersHoc = (ProductFiltersComponent) => {
  class ProductFiltersHoc extends React.Component {
    getProductFilters(options) {
      const Label = filter(options, ['key', 'Label']);
      const Country = filter(options, ['key', 'Country']);
      const Style = filter(options, ['key', 'Style']);
      return {
        Label,
        Country,
        Style,
      };
    }

    render() {
      const productFilters = this.getProductFilters(this.props.distinctProductOptions.data);
      return (
        <ProductFiltersComponent
          {...this.props}
          productFilters={productFilters}
        />
      );
    }
  }

  ProductFiltersHoc.propTypes = {
    distinctProductOptions: PropTypes.shape({
      data: PropTypes.object,
    }).isRequired,
  };

  return ProductFiltersHoc;
};

export default productFiltersHoc;
