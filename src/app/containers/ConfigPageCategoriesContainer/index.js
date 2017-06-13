import React, { PropTypes } from 'react';
import 'containers/ConfigPageCategoriesContainer/_ConfigPageCategoriesContainer.scss';

import configPageCategoriesHoc from 'containers/ConfigPageCategoriesContainer/configPageCategoriesHoc';
import ConfigCategoriesComponent from 'components/ConfigCategories/ConfigCategoriesComponent';
import ConfigSubCategoriesComponent from 'components/ConfigSubCategories/ConfigSubCategoriesComponent';
import ConfigSidebarComponent from 'components/ConfigSidebar/ConfigSidebarComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import flow from 'lodash/flow';

export class ConfigPageCategoriesContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div className="ConfigPageCategoriesContainerBlock">
        <div className="ConfigPageCategoriesContainerBlock-title">Config page categories</div>
        <div className="ConfigPageCategoriesContainer">
          <div className="ConfigPageCategoriesContainer-block">
            <div className="ConfigPageCategoriesContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationFailure =>
                <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
              )}
            </div>
            <div className="ConfigPageCategoriesContainer-block-left">
              <ConfigCategoriesComponent createNewCategory={this.props.postPageCategoryRequest} />
              <ConfigSubCategoriesComponent categories={this.props.mappedCategories} createNewSubCategory={this.props.postPageSubCategoryRequest} />
            </div>
            <div className="ConfigPageCategoriesContainer-block-right">
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
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
  getPageCategoriesIdle: PropTypes.func.isRequired,
  getPageSubCategoriesIdle: PropTypes.func.isRequired,
  postPageCategoryRequest: PropTypes.func.isRequired,
  postPageSubCategoryRequest: PropTypes.func.isRequired,
};

ConfigPageCategoriesContainer.propTypes = propTypes;
export const init = flow([configPageCategoriesHoc]);
export default init(ConfigPageCategoriesContainer);
