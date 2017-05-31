import React from 'react';
import 'components/LoginForm/_LoginFormComponent.scss';

const LoginFormComponent = () =>
  <div className="LoginFormComponentBlock">
    <div className="LoginFormComponent">
      <div className="LoginFormComponent-title">
        Website name
      </div>

      <div className="LoginFormComponent-input">
        <input type="text" />
      </div>
      <div className="LoginFormComponent-input">
        <input type="password" />
      </div>
      <div className="LoginFormComponent-control">
        <div className="LoginFormComponent-control-left">
          <button className="Submit">Submit</button>
        </div>
        <div className="LoginFormComponent-control-right">
          <a href="">Forgot password ?</a>
        </div>
      </div>

    </div>
  </div>;

LoginFormComponent.propTypes = {
};

export default LoginFormComponent;
