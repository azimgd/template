import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import ConfigSubCategoriesComponentValidator from 'validators/ConfigSubCategoriesComponentValidator';
import { InputText, InputSelect } from 'components/shared/SharedFormInputComponent';

const ConfigSubCategoriesComponent = ({ handleSubmit, createNewSubCategory }) =>
  <div className="ConfigSubCategoriesComponentBlock">
    <form className="ConfigSubCategoriesComponent" onSubmit={handleSubmit(createNewSubCategory)}>
      <div className="ConfigSubCategoriesComponent-configForm">
        <div className="ConfigSubCategoriesComponent-configForm-input">
          <Field name="productCategory" component={InputSelect} label="Product category" options={[]} />
        </div>
        <div className="ConfigSubCategoriesComponent-configForm-input">
          <Field name="productSubCategory" component={InputText} label="New sub category name" />
        </div>
      </div>

      <button type="submit" className="ConfigSubCategoriesComponent-button">
        Create new subcategory
      </button>
    </form>
  </div>;

ConfigSubCategoriesComponent.propTypes = {
  createNewSubCategory: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ConfigSubCategoriesComponent',
  asyncValidate: ConfigSubCategoriesComponentValidator.asyncValidate,
})(ConfigSubCategoriesComponent);
