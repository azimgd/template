import React, { PropTypes } from 'react';
import configMock from 'mocks/config';
import pageFormContainerHoc from 'hoc/pageFormContainerHoc';
import PageFormComponent from 'components/pageForm/PageFormComponent';

class PageFormContainer extends React.Component {
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
          Pages
        </div>
        <div className="PageFormContainer">
          <PageFormComponent
            createPage={this.createPage}
            citiesList={configMock.citiesList}
            categories={this.props.mappedCategories}
            subCategories={this.props.mappedSubCategories}
          />
        </div>
      </div>
    );
  }
}

PageFormContainer.propTypes = {
  mappedCategories: PropTypes.object.isRequired,
  mappedSubCategories: PropTypes.object.isRequired,
  postPageRequest: PropTypes.func.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
};

export default pageFormContainerHoc(PageFormContainer);
