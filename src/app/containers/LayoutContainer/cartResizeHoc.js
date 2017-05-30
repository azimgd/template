import React from 'react';

const cartResizeHoc = (CartViewComponent) => {
  class CartResizeHocComponent extends React.Component {
    constructor(props) {
      super(props);

      this.onResize = this.onResize.bind(this);
      this.state = {
        top: null,
        left: null,
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

    /**
     * Using css -> visibility prop over css -> display on CartDropdownComponent
     * is must when calculating offsetWidth param
     */
    onResize() {
      const headerElement = document.querySelector('.HeaderComponentBlock');
      const dropdownElement = document.querySelector('.CartDropdownComponent');
      const headerCoordinates = headerElement.getBoundingClientRect();
      const top = headerCoordinates.top + (headerElement.offsetHeight / 2) + 18;
      const left = headerCoordinates.right - dropdownElement.offsetWidth;
      this.setState({ top, left });
    }

    render() {
      return <CartViewComponent {...this.props} cartPosition={this.state} />;
    }
  }

  return CartResizeHocComponent;
};

export default cartResizeHoc;
