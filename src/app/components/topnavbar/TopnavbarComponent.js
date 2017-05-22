import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavbarItem = ({ currentPath, itemPath, itemText }) => {
  const isActive = currentPath === (itemPath === '/' ? '' : itemPath);
  return (
    <li className={`TopnavbarComponent-nav-item ${isActive ? 'TopnavbarComponent-nav-item--active' : ''}`}>
      <Link to={itemPath}>{itemText}</Link>
    </li>
  );
};

NavbarItem.propTypes = {
  currentPath: PropTypes.string.isRequired,
  itemPath: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
};

const TopnavbarComponent = ({ pathname }) => {
  const path = pathname.replace(/\/$/, '');
  return (
    <div className="TopnavbarComponentBlock">
      <div className="TopnavbarComponent">
        <ul className="TopnavbarComponent-nav">
          <NavbarItem currentPath={path} itemPath="/products" itemText="Products" />
          <NavbarItem currentPath={path} itemPath="/pages" itemText="Blog" />
        </ul>
      </div>
    </div>
  );
};

TopnavbarComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default TopnavbarComponent;
