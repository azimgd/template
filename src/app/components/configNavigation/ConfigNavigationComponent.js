import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import ConfigNavigationComponentValidator from 'validators/ConfigNavigationComponentValidator';
import { InputText } from 'components/shared/SharedFormInputComponent';

const ConfigNavigationComponent = ({ handleSubmit, createNewRoute }) =>
  <div className="ConfigNavigationComponentBlock">
    <form className="ConfigNavigationComponent" onSubmit={handleSubmit(createNewRoute)}>
      <div className="ConfigNavigationComponent-configForm">
        <div className="ConfigNavigationComponent-configForm-input">
          <Field name="newRoutePath" component={InputText} label="Path of new route" />
        </div>
        <div className="ConfigNavigationComponent-configForm-input">
          <Field name="newRouteName" component={InputText} label="Name of new route" />
        </div>
      </div>

      <button type="submit" className="ConfigNavigationComponent-button">
        Add route
      </button>
    </form>
  </div>;

ConfigNavigationComponent.propTypes = {
  createNewRoute: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ConfigNavigationComponent',
  asyncValidate: ConfigNavigationComponentValidator.asyncValidate,
})(ConfigNavigationComponent);
