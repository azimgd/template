import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/ProductCreateContainer/_ProductCreateContainer.scss';

import productCreateHoc from 'containers/ProductCreateContainer/productCreateHoc';
import ProductFormComponent from 'components/ProductForm/ProductFormComponent';
import ProductAboutComponent from 'components/ProductAbout/ProductAboutComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import ImagePreviewComponent from 'components/ImagePreview/ImagePreviewComponent';
import ImageUploadComponent from 'components/ImageUpload/ImageUploadComponent';
import flow from 'lodash/flow';

export class ProductCreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createProduct = this.createProduct.bind(this);
  }

  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
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
      <div styleName="block">
        <div styleName="title">Products page</div>
        <div styleName="component">
          <div styleName="component-block">
            <div styleName="component-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationFailure =>
                <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
              )}
            </div>

            <div styleName="component-block-left">
              <ProductFormComponent
                createProduct={this.createProduct}
                categories={this.props.mappedCategories}
                subCategories={this.props.mappedSubCategories}
              >
                {!this.props.images.data.length ? <div styleName="component-imagesEmpty">No uploaded images</div> : null}
                {this.props.images.data.length ? <label htmlFor="">Uploaded images</label> : null}
                {this.props.images.data.length ?
                  <div styleName="component-images">
                    {this.props.images.data.map((image, key) => <div key={key}><ImagePreviewComponent image={image} /></div>)}
                  </div>
                : null}
                <div styleName="component-upload">
                  <ImageUploadComponent {...config} />
                </div>
              </ProductFormComponent>
            </div>

            <div styleName="component-block-right">
              <ProductAboutComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export const propTypes = {
  componentWillMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
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

ProductCreateContainer.propTypes = propTypes;
export const init = flow([productCreateHoc]);
export default init(css(ProductCreateContainer, styles));
