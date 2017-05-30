import React from 'react';
import 'scss/components/_ConfigSidebarComponent.scss';

const ConfigSidebarComponent = () =>
  <div className="ConfigSidebarComponent">
    <div className="ConfigSidebarComponent-item">
      <div className="ConfigSidebarComponent-item-title">
        Default sidebar title
      </div>
      <div className="ConfigSidebarComponent-item-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>;

ConfigSidebarComponent.propTypes = {
};

export default ConfigSidebarComponent;
