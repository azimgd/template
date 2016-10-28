import React, { PropTypes } from 'react';
import configMock from 'mocks/config';
import pageFormContainerHoc from 'hoc/pageFormContainerHoc';
import PageFormComponent from 'components/pageForm/PageFormComponent';

class PageFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.createPage = this.createPage.bind(this);
  }

  createPage(data) {
    this.props.createPage(data);
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
            categoriesList={configMock.categoriesList}
            subcategoriesList={configMock.subcategoriesList}
          />
        </div>
      </div>
    );
  }
}

PageFormContainer.propTypes = {
  createPage: PropTypes.func.isRequired,
};

export default pageFormContainerHoc(PageFormContainer);
