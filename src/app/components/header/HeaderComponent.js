import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import configMock from 'mocks/config';
import { TitleIconComponent } from 'components/icons/IconsComponent';

const HeaderComponent = ({ toggleCartDropdown }) =>
  <div className="HeaderComponentBlock">
    <div className="HeaderComponent">
      <div className="HeaderComponent-left">
        <div className="HeaderComponent-left-title"><Link to="/">{configMock.siteTitle}</Link></div>
      </div>
      <div className="HeaderComponent-right">
        <div onClick={toggleCartDropdown}><TitleIconComponent name="IoIosCart" /> Cart (10)</div>
      </div>
    </div>
  </div>;

HeaderComponent.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
};

export default HeaderComponent;
