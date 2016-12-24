import React, { PropTypes } from 'react';
import configMock from 'mocks/config';
import pageCreateHoc from 'containers/PageCreateContainer/pageCreateHoc';
import PageFormComponent from 'components/pageForm/PageFormComponent';
import NotificationComponent from 'components/notification/NotificationComponent';
import ProductAboutComponent from 'components/productAbout/ProductAboutComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';

export class PageCreateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.createPage = this.createPage.bind(this);
  }

  componentWillMount() {
    this.props.getPageCategoriesRequest();
    this.props.getPageSubCategoriesRequest();
  }

  componentWillUnmount() {
    this.props.getPageCategoriesIdle();
    this.props.getPageSubCategoriesIdle();
  }

  createPage(data) {
    this.props.postPageRequest(data);
  }

  render() {
    return (
      <div className="PageCreateContainerBlock">
        <div className="PageCreateContainerBlock-title">
          <TitleIconComponent name="IoIosCompose" /> Pages
        </div>
        <div className="PageCreateContainer">
          <div className="PageCreateContainer-block">
            <div className="PageCreateContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationsFailure =>
                <NotificationComponent isVisible message={notificationsFailure.message} status={notificationsFailure.status} />
              )}
            </div>
            <div className="PageCreateContainer-block-left">
              <PageFormComponent
                createPage={this.createPage}
                citiesList={configMock.citiesList}
                categories={this.props.mappedCategories}
                subCategories={this.props.mappedSubCategories}
              />
            </div>
            <div className="PageCreateContainer-block-right">
              <ProductAboutComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageCreateContainer.propTypes = {
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
  mappedCategories: PropTypes.object.isRequired,
  mappedSubCategories: PropTypes.object.isRequired,
  postPageRequest: PropTypes.func.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
  getPageCategoriesIdle: PropTypes.func.isRequired,
  getPageSubCategoriesIdle: PropTypes.func.isRequired,
};

export default pageCreateHoc(PageCreateContainer);
