import React, { PropTypes } from 'react';
import productFormContainerHoc from 'hoc/productFormContainerHoc';
import ProductFormComponent from 'components/productForm/ProductFormComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';

class ProductFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(data) {
    this.props.createProduct(data);
  }

  render() {
    return (
      <div className="ProductFormContainerBlock">
        <div className="ProductFormContainerBlock-title">
          Products page
        </div>
        <div className="ProductFormContainer">
          <div className="ProductFormContainer-block">
            <div className="ProductFormContainer-block-left">
              <ProductFormComponent
                createProduct={this.createProduct}
              />
            </div>
            <div className="ProductFormContainer-block-right">
              <ProductAboutComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductFormContainer.propTypes = {
  createProduct: PropTypes.func.isRequired,
};

export default productFormContainerHoc(ProductFormContainer);
