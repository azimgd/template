import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/PageForm/_PageFormComponent.scss';

import { Field, reduxForm } from 'redux-form';
import PageFormComponentValidator from 'validators/PageFormComponentValidator';
import { InputText, InputSelect, RichTextarea } from 'components/Shared/SharedFormInputComponent';

const PageFormComponent = ({ categories, subCategories, handleSubmit, createPage }) =>
  <div styleName="PageFormComponentBlock">
    <form styleName="PageFormComponent" onSubmit={handleSubmit(createPage)}>
      <div styleName="PageFormComponent-pageForm">
        <div styleName="PageFormComponent-pageForm-input">
          <Field name="title" component={InputText} label="Page title" />
        </div>
        <div styleName="PageFormComponent-pageForm-input">
          <Field name="categoryId" component={InputSelect} label="Page category" options={categories} />
        </div>
        <div styleName="PageFormComponent-pageForm-input">
          <Field name="subCategoryId" component={InputSelect} label="Page subcategory" options={subCategories} />
        </div>
        <div styleName="PageFormComponent-pageForm-input">
          <Field name="content" component={RichTextarea} label="Page content" />
        </div>
      </div>

      <button type="submit" styleName="PageFormComponent-button">
        Create now
      </button>
    </form>
  </div>;

PageFormComponent.propTypes = {
  createPage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  subCategories: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'PageFormComponent',
  asyncValidate: PageFormComponentValidator.asyncValidate,
})(css(PageFormComponent, styles));
