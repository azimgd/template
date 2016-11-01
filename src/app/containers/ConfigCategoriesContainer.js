import React, { PropTypes } from 'react';

import configCategoriesContainerHoc from 'hoc/configCategoriesContainerHoc';
import ConfigCategoriesComponent from 'components/configCategories/ConfigCategoriesComponent';
import ConfigSubCategoriesComponent from 'components/configSubCategories/ConfigSubCategoriesComponent';

class ConfigCategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.createNewSubCategory = this.createNewSubCategory.bind(this);
  }

  createNewCategory() {}

  createNewSubCategory() {}

  render() {
    return (
      <div className="ConfigCategoriesContainerBlock">
        <div className="ConfigCategoriesContainerBlock-title">
          Config categories
        </div>
        <div className="ConfigCategoriesContainer">
          <div className="ConfigCategoriesContainer-block">
            <div className="ConfigCategoriesContainer-block-left">
              <ConfigCategoriesComponent createNewCategory={this.createNewCategory} />
              <ConfigSubCategoriesComponent createNewSubCategory={this.createNewSubCategory} />
            </div>
            <div className="ConfigCategoriesContainer-block-right">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ConfigCategoriesContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configCategoriesContainerHoc(ConfigCategoriesContainer);
