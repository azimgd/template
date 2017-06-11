import React, { PropTypes } from 'react';
import 'components/LoginForm/_LoginFormComponent.scss';

import { Field, reduxForm } from 'redux-form';
import LoginFormComponentValidator from 'validators/LoginFormComponentValidator';
import { InputText, InputPassword } from 'components/Shared/SharedFormInputComponent';

const LoginFormComponent = ({ handleSubmit, postLoginRequest }) =>
  <div className="LoginFormComponentBlock">
    <form className="LoginFormComponent" onSubmit={handleSubmit(postLoginRequest)}>
      <div className="LoginFormComponent-form">
        <div className="LoginFormComponent-form-input">
          <Field name="username" component={InputText} label="Username" />
        </div>
        <div className="LoginFormComponent-form-input">
          <Field name="password" component={InputPassword} label="Password" />
        </div>
      </div>

      <div className="LoginFormComponent-control">
        <button type="submit" className="LoginFormComponent-button">
          Submit
        </button>

        <a href="" className="LoginFormComponent-link">
          Forgot password ?
        </a>
      </div>
    </form>
  </div>;

LoginFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  postLoginRequest: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'LoginFormComponent',
  asyncValidate: LoginFormComponentValidator.asyncValidate,
})(LoginFormComponent);
