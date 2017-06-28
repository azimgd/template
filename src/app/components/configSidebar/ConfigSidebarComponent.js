import React from 'react';
import css from 'services/cssService';
import styles from 'components/ConfigSidebar/_ConfigSidebarComponent.scss';

const ConfigSidebarComponent = () =>
  <div styleName="ConfigSidebarComponent">
    <div styleName="ConfigSidebarComponent-item">
      <div styleName="ConfigSidebarComponent-item-title">
        Default sidebar title
      </div>
      <div styleName="ConfigSidebarComponent-item-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>;

ConfigSidebarComponent.propTypes = {
};

export default css(ConfigSidebarComponent, styles);
