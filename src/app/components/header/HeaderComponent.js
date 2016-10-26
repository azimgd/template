import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HeaderComponent = ({ toggleCartDropdown }) =>
  <div className="HeaderComponentBlock">
    <div className="HeaderComponent">
      <div className="HeaderComponent-left">
        <div className="HeaderComponent-left-title"><Link to="/">Default Shop name</Link></div>
      </div>
      <div className="HeaderComponent-right">
        <div onClick={toggleCartDropdown}>Cart (10)</div>
      </div>
    </div>
  </div>;

HeaderComponent.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
};

export default HeaderComponent;
