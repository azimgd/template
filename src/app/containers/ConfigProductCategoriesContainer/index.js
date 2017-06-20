import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/ConfigProductCategoriesContainer/_ConfigProductCategoriesContainer.scss';

import configProductCategoriesHoc from 'containers/ConfigProductCategoriesContainer/configProductCategoriesHoc';
import ConfigCategoriesComponent from 'components/ConfigCategories/ConfigCategoriesComponent';
import ConfigSubCategoriesComponent from 'components/ConfigSubCategories/ConfigSubCategoriesComponent';
import ConfigSidebarComponent from 'components/ConfigSidebar/ConfigSidebarComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import flow from 'lodash/flow';

export class ConfigProductCategoriesContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div styleName="ConfigProductCategoriesContainerBlock">
        <div styleName="ConfigProductCategoriesContainerBlock-title">Config product categories</div>
        <div styleName="ConfigProductCategoriesContainer">
          <div styleName="ConfigProductCategoriesContainer-block">
            <div styleName="ConfigProductCategoriesContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationFailure =>
                <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
              )}
            </div>
            <div styleName="ConfigProductCategoriesContainer-block-left">
              <ConfigCategoriesComponent createNewCategory={this.props.postProductCategoryRequest} />
              <ConfigSubCategoriesComponent categories={this.props.mappedCategories} createNewSubCategory={this.props.postProductSubCategoryRequest} />
            </div>
            <div styleName="ConfigProductCategoriesContainer-block-right">
              <ConfigSidebarComponent />
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
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
  mappedCategories: PropTypes.array.isRequired,
  mappedSubCategories: PropTypes.array.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
  getProductCategoriesIdle: PropTypes.func.isRequired,
  getProductSubCategoriesIdle: PropTypes.func.isRequired,
  postProductCategoryRequest: PropTypes.func.isRequired,
  postProductSubCategoryRequest: PropTypes.func.isRequired,
};

ConfigProductCategoriesContainer.propTypes = propTypes;
export const init = flow([configProductCategoriesHoc]);
export default init(css(ConfigProductCategoriesContainer, styles));
