import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/LoginForm/_LoginFormComponent.scss';

import { Field, reduxForm } from 'redux-form';
import LoginFormComponentValidator from 'validators/LoginFormComponentValidator';
import { InputText, InputPassword } from 'components/Shared/SharedFormInputComponent';

const LoginFormComponent = ({ handleSubmit, postLoginRequest }) =>
  <div styleName="LoginFormComponentBlock">
    <form styleName="LoginFormComponent" onSubmit={handleSubmit(postLoginRequest)}>
      <div styleName="LoginFormComponent-form">
        <div styleName="LoginFormComponent-form-input">
          <Field name="username" component={InputText} label="Username" />
        </div>
        <div styleName="LoginFormComponent-form-input">
          <Field name="password" component={InputPassword} label="Password" />
        </div>
      </div>

      <div styleName="LoginFormComponent-control">
        <button type="submit" styleName="LoginFormComponent-button">
          Submit
        </button>

        <a href="" styleName="LoginFormComponent-link">
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
})(css(LoginFormComponent, styles));
