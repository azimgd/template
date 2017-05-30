import React, { PropTypes } from 'react';
import 'scss/components/_ConfigSubCategoriesComponent.scss';

import { Field, reduxForm } from 'redux-form';
import ConfigSubCategoriesComponentValidator from 'validators/ConfigSubCategoriesComponentValidator';
import { InputText, InputSelect } from 'components/shared/SharedFormInputComponent';

const ConfigSubCategoriesComponent = ({ categories, handleSubmit, createNewSubCategory }) =>
  <div className="ConfigSubCategoriesComponentBlock">
    <form className="ConfigSubCategoriesComponent" onSubmit={handleSubmit(createNewSubCategory)}>
      <div className="ConfigSubCategoriesComponent-configForm">
        <div className="ConfigSubCategoriesComponent-configForm-input">
          <Field name="categoryId" component={InputSelect} label="Product category" options={categories} />
        </div>
        <div className="ConfigSubCategoriesComponent-configForm-input">
          <Field name="name" component={InputText} label="New sub category name" />
        </div>
      </div>

      <button type="submit" className="ConfigSubCategoriesComponent-button">
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
})(ConfigSubCategoriesComponent);
