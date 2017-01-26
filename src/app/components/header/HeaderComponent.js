import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import configMock from 'mocks/config';

const HeaderComponent = ({ children }) =>
  <div className="HeaderComponentBlock">
    <div className="HeaderComponent">
      <div className="HeaderComponent-left">
        <div className="Logo"><Link to="/">{configMock.siteTitle}</Link></div>
      </div>
      <div className="HeaderComponent-right">
        {children}
      </div>
    </div>
  </div>;

HeaderComponent.propTypes = {
  children: PropTypes.object.isRequired,
};

export default HeaderComponent;
