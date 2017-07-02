import React from 'react';
import _ from 'lodash';

const productsResizeHoc = (querySelector, ProductViewComponent) => {
  class ProductsResizeListenerComponent extends React.Component {
    constructor(props) {
      super(props);

      this.onResize = this.onResize.bind(this);
      this.state = {
        maxHeight: null,
      };
    }

    componentWillMount() {
      window.addEventListener('resize', this.onResize);
    }

    componentDidMount() {
      // hack to ensure all documents loaded into dom
      setTimeout(() => this.onResize(), 300);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    onResize() {
      const elements = document.querySelectorAll(querySelector);
      const maxHeight = _.chain(elements).map(item => item.offsetHeight).max().value();
      this.setState({ maxHeight });
    }

    render() {
      return <ProductViewComponent {...this.props} {...this.state} />;
    }
  }

  return ProductsResizeListenerComponent;
};

export default productsResizeHoc;
