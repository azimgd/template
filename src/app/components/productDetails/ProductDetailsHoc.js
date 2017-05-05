import React, { PropTypes } from 'react';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

const productDetailsHoc = (ProductDetailsComponent) => {
  class ProductDetailsHoc extends React.Component {
    componentWillMount() {
      const productOptions = this.stripFilteredOptions(this.props.productOptions);
      const youtubeOptions = this.getYoutubeOptions(this.props.productOptions);
      this.setState({ productOptions, youtubeOptions });
    }

    stripFilteredOptions(productOptions) {
      return filter(productOptions, item => !includes(item.key, '[['));
    }

    getYoutubeOptions(productOptions) {
      return filter(productOptions, item => includes(item.key, '[[youtube_iframe]]'));
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
    productOptions: PropTypes.object.isRequired,
  };

  return ProductDetailsHoc;
};

export default productDetailsHoc;
