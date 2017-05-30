import React from 'react';
import 'scss/containers/_LoginContainer.scss';

import LoginFormComponent from 'components/loginForm/LoginFormComponent';

const LoginContainer = () =>
  <div className="LoginContainerBlock">
    <LoginFormComponent />
  </div>;

export default LoginContainer;
