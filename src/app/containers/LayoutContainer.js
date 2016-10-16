import React, { PropTypes } from 'react';

import HeaderComponent from 'components/header/HeaderComponent';
import SidebarComponent from 'components/sidebar/SidebarComponent';

const LayoutContainer = ({ children }) =>
  <div className="LayoutContainerBlock">
    <div className="LayoutContainer">
      <div className="LayoutContainer-header">
        <HeaderComponent />
      </div>
      <div className="LayoutContainer-content">
        {children}
      </div>
      <div className="LayoutContainer-sidebar">
        <SidebarComponent />
      </div>
    </div>
  </div>;

LayoutContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default LayoutContainer;
