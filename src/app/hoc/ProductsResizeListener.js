import React from 'react';
import _ from 'lodash';

const productsResizeListener = (CameraViewComponent) => {
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
      this.onResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    onResize() {
      const elements = document.querySelectorAll('.ProductsContainerBlock .ProductComponent');
      const maxHeight = _.chain(elements).map(item => item.offsetHeight).max().value();
      this.setState({ maxHeight });
    }

    render() {
      return <CameraViewComponent {...this.state} />;
    }
  }

  return ProductsResizeListenerComponent;
};

export default productsResizeListener;
