import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ConfigSubCategories/_ConfigSubCategoriesComponent.scss';

import { Field, reduxForm } from 'redux-form';
import ConfigSubCategoriesComponentValidator from 'validators/ConfigSubCategoriesComponentValidator';
import { InputText, InputSelect } from 'components/Shared/SharedFormInputComponent';

const ConfigSubCategoriesComponent = ({ categories, handleSubmit, createNewSubCategory }) =>
  <div styleName="ConfigSubCategoriesComponentBlock">
    <form styleName="ConfigSubCategoriesComponent" onSubmit={handleSubmit(createNewSubCategory)}>
      <div styleName="ConfigSubCategoriesComponent-configForm">
        <div styleName="ConfigSubCategoriesComponent-configForm-input">
          <Field name="categoryId" component={InputSelect} label="Product category" options={categories} />
        </div>
        <div styleName="ConfigSubCategoriesComponent-configForm-input">
          <Field name="name" component={InputText} label="New sub category name" />
        </div>
      </div>

      <button type="submit" styleName="ConfigSubCategoriesComponent-button">
        Create new subcategory
      </button>
    </form>
  </div>;

ConfigSubCategoriesComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  createNewSubCategory: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ConfigSubCategoriesComponent',
  asyncValidate: ConfigSubCategoriesComponentValidator.asyncValidate,
})(css(ConfigSubCategoriesComponent, styles));
