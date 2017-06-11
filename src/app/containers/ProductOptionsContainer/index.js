import React, { PropTypes } from 'react';
import 'containers/ProductOptionsContainer/_ProductOptionsContainer.scss';

import productOptionsHoc from 'containers/ProductOptionsContainer/productOptionsHoc';
import ProductOptionsFormComponent from 'components/ProductOptionsForm/ProductOptionsFormComponent';
import ProductOptionsListComponent from 'components/ProductOptionsList/ProductOptionsListComponent';
import ProductAboutComponent from 'components/ProductAbout/ProductAboutComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import flow from 'lodash/flow';

export class ProductOptionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createOption = this.createOption.bind(this);
  }

  componentWillMount() {
    this.props.getProductRequest({ id: this.props.params.id });
    this.props.getProductOptionsRequest({ id: this.props.params.id });
  }

  componentWillUnmount() {
    this.props.getProductIdle();
  }

  createOption(data) {
    this.props.postProductOptionRequest({ ...data, productId: this.props.params.id });
  }

  render() {
    return (
      <div className="ProductOptionsContainerBlock">
        <div className="ProductOptionsContainerBlock-title">
          {this.props.product.data.title}
        </div>
        <div className="ProductOptionsContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div className="ProductOptionsContainer-block">
                <div className="ProductOptionsContainer-block-full">
                  {this.props.notificationsSuccess.map(notificationSuccess =>
                    <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
                  )}
                  {this.props.notificationsFailure.map(notificationFailure =>
                    <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
                  )}
                </div>
                <div className="ProductOptionsContainer-block-left">
                  <ProductOptionsListComponent
                    productOptions={this.props.productOptions.data}
                  />
                  <ProductOptionsFormComponent
                    createOption={this.createOption}
                  />
                </div>
                <div className="ProductOptionsContainer-block-right">
                  <ProductAboutComponent product={this.props.product.data} />
                </div>
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

export const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  product: PropTypes.object.isRequired,
  productOptions: PropTypes.object.isRequired,
  getProductRequest: PropTypes.func.isRequired,
  getProductOptionsRequest: PropTypes.func.isRequired,
  getProductIdle: PropTypes.func.isRequired,
  postProductOptionRequest: PropTypes.func.isRequired,
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
};

ProductOptionsContainer.propTypes = propTypes;
export const init = flow([productOptionsHoc]);
export default init(ProductOptionsContainer);
