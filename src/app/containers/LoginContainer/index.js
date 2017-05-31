import React from 'react';
import 'containers/LoginContainer/_LoginContainer.scss';

import LoginFormComponent from 'components/LoginForm/LoginFormComponent';
import flow from 'lodash/flow';

const LoginContainer = () =>
  <div className="LoginContainerBlock">
    <LoginFormComponent />
  </div>;

export const propTypes = {
};

LoginContainer.propTypes = propTypes;
export const init = flow();
export default init(LoginContainer);
