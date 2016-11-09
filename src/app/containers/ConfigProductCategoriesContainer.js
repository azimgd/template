import React, { PropTypes } from 'react';

import configProductCategoriesContainerHoc from 'hoc/configProductCategoriesContainerHoc';
import ConfigCategoriesComponent from 'components/configCategories/ConfigCategoriesComponent';
import ConfigSubCategoriesComponent from 'components/configSubCategories/ConfigSubCategoriesComponent';

class ConfigCategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createNewCategory = this.createNewCategory.bind(this);
    this.createNewSubCategory = this.createNewSubCategory.bind(this);
  }

  componentWillMount() {
    this.props.getProductCategoriesRequest();
    this.props.getProductSubCategoriesRequest();
  }

  createNewCategory(category) {
    this.props.postProductCategoryRequest(category);
  }

  createNewSubCategory(subCategory) {
    this.props.postProductSubCategoryRequest(subCategory);
  }

  render() {
    return (
      <div className="ConfigCategoriesContainerBlock">
        <div className="ConfigCategoriesContainerBlock-title">
          Config product categories
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
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
  postProductCategoryRequest: PropTypes.func.isRequired,
  postProductSubCategoryRequest: PropTypes.func.isRequired,
};

export default configProductCategoriesContainerHoc(ConfigCategoriesContainer);
