import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import ProductOptionsFormComponentValidator from 'validators/ProductOptionsFormComponentValidator';
import { InputText } from 'components/shared/SharedFormInputComponent';

const ProductOptionsFormComponent = ({ handleSubmit, createOption }) =>
  <div className="ProductOptionsFormComponentBlock">
    <form className="ProductOptionsFormComponent" onSubmit={handleSubmit(createOption)}>
      <div className="ProductOptionsFormComponent-optionForm">
        <div className="ProductOptionsFormComponent-optionForm-input">
          <Field name="key" component={InputText} label="Option key" />
        </div>
        <div className="ProductOptionsFormComponent-optionForm-input">
          <Field name="value" component={InputText} label="Option value" />
        </div>
      </div>

      <button type="submit" className="ProductOptionsFormComponent-button">
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
})(ProductOptionsFormComponent);
