import React from 'react';
import { Link } from 'react-router';

const HeaderComponent = () =>
  <div className="HeaderComponentBlock">
    <div className="HeaderComponent">
      <div className="HeaderComponent-left">
        <div className="HeaderComponent-left-title"><Link to="/">Default Shop name</Link></div>
      </div>
      <div className="HeaderComponent-right">
        Cart (10)
      </div>
    </div>
  </div>;

HeaderComponent.propTypes = {
};

export default HeaderComponent;
