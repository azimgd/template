import React, { PropTypes } from 'react';
import flow from 'lodash/flow';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

const productDetailsHoc = (ProductDetailsComponent) => {
  class ProductDetailsHoc extends React.Component {
    constructor(props) {
      super(props);
      this.encodeOptionsValue = this.encodeOptionsValue.bind(this);
    }

    componentWillMount() {
      const productOptions = this.stripFilteredOptions(this.props.productOptions);
      const youtubeOptions = flow([this.getYoutubeOptions, this.encodeOptionsValue])(this.props.productOptions);
      this.setState({ productOptions, youtubeOptions });
    }

    getYoutubeOptions(productOptions) {
      return filter(productOptions, item => includes(item.key, '[[youtube_iframe]]'));
    }

    stripFilteredOptions(productOptions) {
      return filter(productOptions, item => !includes(item.key, '[['));
    }

    parseJsonValue(item) {
      try {
        const value = JSON.parse(item.value);
        return { ...item, value };
      } catch (e) {
        return undefined;
      }
    }

    encodeOptionsValue(productOptions) {
      return productOptions
        .map(this.parseJsonValue)
        .filter(item => item);
    }

    render() {
      return (
        <ProductDetailsComponent
          {...this.props}
          productOptions={this.state.productOptions}
          youtubeOptions={this.state.youtubeOptions}
        />
      );
    }
  }

  ProductDetailsHoc.propTypes = {
    productOptions: PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  };

  return ProductDetailsHoc;
};

export default productDetailsHoc;
