import React, { PropTypes } from 'react';

import configPageCategoriesContainerHoc from 'hoc/configPageCategoriesContainerHoc';
import ConfigCategoriesComponent from 'components/configCategories/ConfigCategoriesComponent';
import ConfigSubCategoriesComponent from 'components/configSubCategories/ConfigSubCategoriesComponent';

class ConfigPageCategoriesContainer extends React.Component {
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
      <div className="ConfigPageCategoriesContainerBlock">
        <div className="ConfigPageCategoriesContainerBlock-title">
          Config page categories
        </div>
        <div className="ConfigPageCategoriesContainer">
          <div className="ConfigPageCategoriesContainer-block">
            <div className="ConfigPageCategoriesContainer-block-left">
              <ConfigCategoriesComponent createNewCategory={this.createNewCategory} />
              <ConfigSubCategoriesComponent categories={this.props.mappedCategories} createNewSubCategory={this.createNewSubCategory} />
            </div>
            <div className="ConfigPageCategoriesContainer-block-right">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ConfigPageCategoriesContainer.propTypes = {
  mappedCategories: PropTypes.array.isRequired,
  mappedSubCategories: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  subCategories: PropTypes.array.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
  postPageCategoryRequest: PropTypes.func.isRequired,
  postPageSubCategoryRequest: PropTypes.func.isRequired,
};

export default configPageCategoriesContainerHoc(ConfigPageCategoriesContainer);
