import React, { PropTypes } from 'react';
import configMock from 'mocks/config';
import productFormContainerHoc from 'hoc/productFormContainerHoc';
import ProductFormComponent from 'components/productForm/ProductFormComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';

class ProductFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createProduct = this.createProduct.bind(this);
  }

  componentWillMount() {
    this.props.getProductCategoriesRequest();
    this.props.getProductSubCategoriesRequest();
  }

  createProduct(data) {
    this.props.postProductRequest(data);
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
                categories={this.props.mappedCategories}
                subCategories={this.props.mappedSubCategories}
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
  mappedCategories: PropTypes.object.isRequired,
  mappedSubCategories: PropTypes.object.isRequired,
  postProductRequest: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
};

export default productFormContainerHoc(ProductFormContainer);
