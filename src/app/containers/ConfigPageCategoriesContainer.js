import React, { PropTypes } from 'react';

import configPageCategoriesContainerHoc from 'hoc/configPageCategoriesContainerHoc';
import ConfigCategoriesComponent from 'components/configCategories/ConfigCategoriesComponent';
import ConfigSubCategoriesComponent from 'components/configSubCategories/ConfigSubCategoriesComponent';

class ConfigCategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.createNewSubCategory = this.createNewSubCategory.bind(this);
  }

  componentWillMount() {
    this.props.getPageCategoriesRequest();
    this.props.getPageSubCategoriesRequest();
  }

  createNewCategory(category) {
    this.props.postPageCategoryRequest(category);
  }

  createNewSubCategory(subCategory) {
    this.props.postPageSubCategoryRequest(subCategory);
  }

  render() {
    return (
      <div className="ConfigCategoriesContainerBlock">
        <div className="ConfigCategoriesContainerBlock-title">
          Config page categories
        </div>
        <div className="ConfigCategoriesContainer">
          <div className="ConfigCategoriesContainer-block">
            <div className="ConfigCategoriesContainer-block-left">
              <ConfigCategoriesComponent createNewCategory={this.createNewCategory} />
              <ConfigSubCategoriesComponent categories={this.props.mappedCategories} createNewSubCategory={this.createNewSubCategory} />
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
  mappedCategories: PropTypes.array.isRequired,
  mappedSubCategories: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  subCategories: PropTypes.array.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
  postPageCategoryRequest: PropTypes.func.isRequired,
  postPageSubCategoryRequest: PropTypes.func.isRequired,
};

export default configPageCategoriesContainerHoc(ConfigCategoriesContainer);
