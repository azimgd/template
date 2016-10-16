import React, { PropTypes } from 'react';

import HeaderComponent from 'components/header/HeaderComponent';
import SidebarComponent from 'components/sidebar/SidebarComponent';
import FooterComponent from 'components/footer/FooterComponent';
import TopnavbarComponent from 'components/topnavbar/TopnavbarComponent';

const LayoutContainer = ({ children }) =>
  <div className="LayoutContainerBlock">
    <div className="LayoutContainer">
      <div className="LayoutContainer-header">
        <HeaderComponent />
      </div>
      <div className="LayoutContainer-topnavbar">
        <TopnavbarComponent />
      </div>
      <div className="LayoutContainer-content">
        {children}
      </div>
      <div className="LayoutContainer-sidebar">
        <SidebarComponent />
      </div>
      <div className="LayoutContainer-footer">
        <FooterComponent />
      </div>
    </div>
  </div>;

LayoutContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default LayoutContainer;
