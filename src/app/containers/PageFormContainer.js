import React, { PropTypes } from 'react';
import configMock from 'mocks/config';
import pageFormContainerHoc from 'hoc/pageFormContainerHoc';
import PageFormComponent from 'components/pageForm/PageFormComponent';
import NotificationComponent from 'components/notification/NotificationComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';

export class PageFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.createPage = this.createPage.bind(this);
  }

  componentWillMount() {
    this.props.getPageCategoriesRequest();
    this.props.getPageSubCategoriesRequest();
  }

  createPage(data) {
    this.props.postPageRequest(data);
  }

  render() {
    return (
      <div className="PageFormContainerBlock">
        <div className="PageFormContainerBlock-title">
          <TitleIconComponent name="IoIosCompose" /> Pages
        </div>
        <div className="PageFormContainer">
          <div className="PageFormContainer-block">
            <div className="PageFormContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationsFailure =>
                <NotificationComponent isVisible message={notificationsFailure.message} status={notificationsFailure.status} />
              )}
            </div>
            <div className="PageFormContainer-block-left">
              <PageFormComponent
                createPage={this.createPage}
                citiesList={configMock.citiesList}
                categories={this.props.mappedCategories}
                subCategories={this.props.mappedSubCategories}
              />
            </div>
            <div className="PageFormContainer-block-right">
              <ProductAboutComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageFormContainer.propTypes = {
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
  mappedCategories: PropTypes.object.isRequired,
  mappedSubCategories: PropTypes.object.isRequired,
  postPageRequest: PropTypes.func.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
};

export default pageFormContainerHoc(PageFormContainer);
