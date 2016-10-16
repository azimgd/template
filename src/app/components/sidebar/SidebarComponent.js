import React from 'react';

const SidebarComponent = () =>
  <div className="SidebarComponent">
    <div className="SidebarComponent-item">
      <div className="SidebarComponent-item-title">
        Default sidebar title
      </div>
      <div className="SidebarComponent-item-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>

    <div className="SidebarComponent-item">
      <div className="SidebarComponent-item-title">
        Default sidebar title
      </div>
      <div className="SidebarComponent-item-content">
        <ul>
          <li><a href="">Hello</a></li>
          <li><a href="">Hello</a></li>
          <li><a href="">Hello</a></li>
          <li><a href="">Hello</a></li>
        </ul>
      </div>
    </div>
  </div>;

SidebarComponent.propTypes = {
};

export default SidebarComponent;
