import React, { PropTypes } from 'react';

import productFormContainerHoc from 'hoc/productFormContainerHoc';
import ProductFormComponent from 'components/productForm/ProductFormComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import NotificationComponent from 'components/notification/NotificationComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';

export class ProductFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createProduct = this.createProduct.bind(this);
  }

  componentWillMount() {
    this.props.getProductCategoriesRequest();
    this.props.getProductSubCategoriesRequest();
  }

  componentWillUnmount() {
    this.props.getProductCategoriesIdle();
    this.props.getProductSubCategoriesIdle();
  }

  createProduct(data) {
    this.props.postProductRequest(data);
  }

  render() {
    return (
      <div className="ProductFormContainerBlock">
        <div className="ProductFormContainerBlock-title">
          <TitleIconComponent name="IoIosCompose" /> Products page
        </div>
        <div className="ProductFormContainer">
          <div className="ProductFormContainer-block">
            <div className="ProductFormContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationsFailure =>
                <NotificationComponent isVisible message={notificationsFailure.message} status={notificationsFailure.status} />
              )}
            </div>
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
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
  mappedCategories: PropTypes.object.isRequired,
  mappedSubCategories: PropTypes.object.isRequired,
  postProductRequest: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
  getProductCategoriesIdle: PropTypes.func.isRequired,
  getProductSubCategoriesIdle: PropTypes.func.isRequired,
};

export default productFormContainerHoc(ProductFormContainer);
