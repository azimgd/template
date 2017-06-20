import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductOptionsForm/_ProductOptionsFormComponent.scss';

import { Field, reduxForm } from 'redux-form';
import ProductOptionsFormComponentValidator from 'validators/ProductOptionsFormComponentValidator';
import { InputText } from 'components/Shared/SharedFormInputComponent';

const ProductOptionsFormComponent = ({ handleSubmit, createOption }) =>
  <div styleName="ProductOptionsFormComponentBlock">
    <form styleName="ProductOptionsFormComponent" onSubmit={handleSubmit(createOption)}>
      <div styleName="ProductOptionsFormComponent-optionForm">
        <div styleName="ProductOptionsFormComponent-optionForm-input">
          <Field name="key" component={InputText} label="Option key" />
        </div>
        <div styleName="ProductOptionsFormComponent-optionForm-input">
          <Field name="value" component={InputText} label="Option value" />
        </div>
      </div>

      <button type="submit" styleName="ProductOptionsFormComponent-button">
        Create now
      </button>
    </form>
  </div>;

ProductOptionsFormComponent.propTypes = {
  createOption: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ProductOptionsFormComponent',
  asyncValidate: ProductOptionsFormComponentValidator.asyncValidate,
})(css(ProductOptionsFormComponent, styles));
