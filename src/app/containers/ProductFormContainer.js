import React, { PropTypes } from 'react';
import { connect } from 'react-hz';

import ProductFormComponent from 'components/productForm/ProductFormComponent';
import ProductFormControlComponent from 'components/productFormControl/ProductFormControlComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';

class ProductFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.createProduct = this.createProduct.bind(this);
  }

  createProduct() {
    this.props.createProduct({ asd: 123 });
  }

  render() {
    return (
      <div className="ProductFormContainerBlock">
        <div className="ProductFormContainerBlock-title">
          Products page 123
        </div>
        <div className="ProductFormContainer">
          <div className="ProductFormContainer-block">
            <div className="ProductFormContainer-block-left">
              <ProductFormComponent />
            </div>
            <div className="ProductFormContainer-block-right">
              <ProductAboutComponent />
            </div>
          </div>
        </div>
        <ProductFormControlComponent
          createProduct={this.createProduct}
        />
      </div>
    );
  }
}

ProductFormContainer.propTypes = {
  createProduct: PropTypes.func.isRequired,
};

const Container = connect(ProductFormContainer, {
  mutations: {
    createProduct: (hz) => (product) => hz('products').store(product),
  },
});

export default Container;
