import React, { PropTypes } from 'react';
import 'scss/containers/_ProductCreateContainer.scss';

import productCreateHoc from 'containers/ProductCreateContainer/productCreateHoc';
import ProductFormComponent from 'components/productForm/ProductFormComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import NotificationComponent from 'components/notification/NotificationComponent';
import ImagePreviewComponent from 'components/imagePreview/ImagePreviewComponent';
import ImageUploadComponent from 'components/imageUpload/ImageUploadComponent';

export class ProductCreateContainer extends React.Component {
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
    this.props.postProductRequest({ ...data, uniqueProductId: this.props.uniqueIdentifier });
    /**
     * Temporary timeout hack to prevent race condition
     */
    setTimeout(this.props.postProductImageRequestBulk.bind(null, this.props.mappedImages), 2000);
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
      <div className="ProductCreateContainerBlock">
        <div className="ProductCreateContainerBlock-title">Products page</div>
        <div className="ProductCreateContainer">
          <div className="ProductCreateContainer-block">
            <div className="ProductCreateContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationsFailure =>
                <NotificationComponent isVisible message={notificationsFailure.message} status={notificationsFailure.status} />
              )}
            </div>

            <div className="ProductCreateContainer-block-left">
              <ProductFormComponent
                createProduct={this.createProduct}
                categories={this.props.mappedCategories}
                subCategories={this.props.mappedSubCategories}
              >
                {!this.props.images.data.length ? <div className="ProductCreateContainer-imagesEmpty">No uploaded images</div> : null}
                {this.props.images.data.length ? <label htmlFor="">Uploaded images</label> : null}
                {this.props.images.data.length ?
                  <div className="ProductCreateContainer-images">
                    {this.props.images.data.map((image, key) => <div key={key}><ImagePreviewComponent image={image} /></div>)}
                  </div>
                : null}
                <div className="ProductCreateContainer-upload">
                  <ImageUploadComponent {...config} />
                </div>
              </ProductFormComponent>
            </div>

            <div className="ProductCreateContainer-block-right">
              <ProductAboutComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductCreateContainer.propTypes = {
  uniqueIdentifier: PropTypes.string.isRequired,
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
  postProductImageRequestBulk: PropTypes.func.isRequired,
};

export default productCreateHoc(ProductCreateContainer);
