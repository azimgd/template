import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import ConfigCategoriesComponentValidator from 'validators/ConfigCategoriesComponentValidator';
import { InputText } from 'components/shared/SharedFormInputComponent';

const ConfigCategoriesComponent = ({ handleSubmit, createNewCategory }) =>
  <div className="ConfigCategoriesComponentBlock">
    <form className="ConfigCategoriesComponent" onSubmit={handleSubmit(createNewCategory)}>
      <div className="ConfigCategoriesComponent-configForm">
        <div className="ConfigCategoriesComponent-configForm-input">
          <Field name="categoryName" component={InputText} label="New category name" />
        </div>
      </div>

      <button type="submit" className="ConfigCategoriesComponent-button">
        Create new category
      </button>
    </form>
  </div>;

ConfigCategoriesComponent.propTypes = {
  createNewCategory: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ConfigCategoriesComponent',
  asyncValidate: ConfigCategoriesComponentValidator.asyncValidate,
})(ConfigCategoriesComponent);
