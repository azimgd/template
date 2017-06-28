import React, { PropTypes } from 'react';
import css from 'services/cssService';
import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';

const productFiltersHoc = (ProductFiltersComponent) => {
  class ProductFiltersHoc extends React.Component {
    constructor(props) {
      super(props);
      this.setActiveItem = this.setActiveItem.bind(this);
    }

    componentWillMount() {
      const productFilters = this.props.distinctProductOptions.data;
      this.setState({ productFilters });
    }

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

    getActiveItems(items) {
      const filteredItems = filter(items, ['isActive', true]);
      return filteredItems.map(item => item.value);
    }

    setActiveItem(nextActiveItem) {
      const productFilters = this.activateItem(this.state.productFilters, nextActiveItem);
      const filteredItems = this.getActiveItems(productFilters);
      this.props.getFilteredProductsRequest(filteredItems);
      this.setState({ productFilters });
    }

    activateItem(items, activeItem) {
      const list = [].concat(items);
      const index = findIndex(list, { value: activeItem.value });
      list.splice(index, 1, { ...activeItem, ...{ isActive: !activeItem.isActive } });
      return list;
    }

    render() {
      const productFilters = this.getProductFilters(this.state.productFilters);
      return (
        <ProductFiltersComponent
          {...this.props}
          productFilters={productFilters}
          setActiveItem={this.setActiveItem}
        />
      );
    }
  }

  ProductFiltersHoc.propTypes = {
    distinctProductOptions: PropTypes.shape({
      data: PropTypes.object,
    }).isRequired,
    getFilteredProductsRequest: PropTypes.func.isRequired,
  };

  return ProductFiltersHoc;
};

export default productFiltersHoc;
