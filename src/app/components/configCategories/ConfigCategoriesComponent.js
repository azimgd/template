import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ConfigCategories/_ConfigCategoriesComponent.scss';

import { Field, reduxForm } from 'redux-form';
import ConfigCategoriesComponentValidator from 'validators/ConfigCategoriesComponentValidator';
import { InputText } from 'components/Shared/SharedFormInputComponent';

const ConfigCategoriesComponent = ({ handleSubmit, createNewCategory }) =>
  <div styleName="ConfigCategoriesComponentBlock">
    <form styleName="ConfigCategoriesComponent" onSubmit={handleSubmit(createNewCategory)}>
      <div styleName="ConfigCategoriesComponent-configForm">
        <div styleName="ConfigCategoriesComponent-configForm-input">
          <Field name="name" component={InputText} label="New category name" />
        </div>
      </div>

      <button type="submit" styleName="ConfigCategoriesComponent-button">
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
})(css(ConfigCategoriesComponent, styles));
