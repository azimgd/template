import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import PageFormComponentValidator from 'validators/PageFormComponentValidator';
import { InputText, InputTextarea, InputSelect } from 'components/shared/SharedFormInputComponent';

const PageFormComponent = ({ categoriesList, subcategoriesList, handleSubmit, createPage }) =>
  <div className="PageFormComponentBlock">
    <form className="PageFormComponent" onSubmit={handleSubmit(createPage)}>
      <div className="PageFormComponent-pageForm">
        <div className="PageFormComponent-pageForm-input">
          <Field name="title" component={InputText} label="Page title" />
        </div>
        <div className="PageFormComponent-pageForm-input">
          <Field name="category" component={InputSelect} label="Page category" options={categoriesList} />
        </div>
        <div className="PageFormComponent-pageForm-input">
          <Field name="subCategory" component={InputSelect} label="Page subcategory" options={subcategoriesList} />
        </div>
        <div className="PageFormComponent-pageForm-input">
          <Field name="content" component={InputTextarea} label="Page content" />
        </div>
      </div>

      <button type="submit" className="PageFormComponent-button">
        Create now
      </button>
    </form>
  </div>;

PageFormComponent.propTypes = {
  createPage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categoriesList: PropTypes.object.isRequired,
  subcategoriesList: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'PageFormComponent',
  asyncValidate: PageFormComponentValidator.asyncValidate,
})(PageFormComponent);
