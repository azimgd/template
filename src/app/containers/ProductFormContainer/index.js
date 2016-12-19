import React, { PropTypes } from 'react';

import productFormHoc from 'containers/ProductFormContainer/productFormHoc';
import ProductFormComponent from 'components/productForm/ProductFormComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import NotificationComponent from 'components/notification/NotificationComponent';
import ImagePreviewComponent from 'components/imagePreview/ImagePreviewComponent';
import ImageUploadComponent from 'components/imageUpload/ImageUploadComponent';
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
    this.props.postProductRequest({ ...data, uniqueProductId: this.props.uniqueProductId });
    this.props.postProductImageRequestBulk(this.props.mappedImages);
  }

  render() {
    const config = {
      signingUrl: '/s3/sign',
      accept: 'image/*',
      onUploadStart: this.props.onUploadStart,
      onUploadProgress: this.props.onUploadProgress,
      onUploadError: this.props.onUploadError,
      onUploadFinish: this.props.onUploadFinish,
      uploadRequestHeaders: { 'x-amz-acl': 'public-read' },
      multiple: 'true',
      server: `${API_ENDPOINT}/api`,
    };

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
              >
                {!this.props.images.data.length ? <div className="ProductFormContainer-imagesEmpty">No uploaded images</div> : null}
                {this.props.images.data.length ? <label htmlFor="">Uploaded images</label> : null}
                {this.props.images.data.length ?
                  <div className="ProductFormContainer-images">
                    {this.props.images.data.map((image, key) => <div key={key}><ImagePreviewComponent image={image} /></div>)}
                  </div>
                : null}
                <div className="ProductFormContainer-upload">
                  <ImageUploadComponent {...config} />
                </div>
              </ProductFormComponent>
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
  uniqueProductId: PropTypes.string.isRequired,
  mappedImages: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  onUploadStart: PropTypes.func.isRequired,
  onUploadProgress: PropTypes.func.isRequired,
  onUploadError: PropTypes.func.isRequired,
  onUploadFinish: PropTypes.func.isRequired,

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

export default productFormHoc(ProductFormContainer);
