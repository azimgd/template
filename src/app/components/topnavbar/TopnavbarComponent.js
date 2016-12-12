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
          <NavbarItem currentPath={path} itemPath="/" itemText="Home page" />
          <NavbarItem currentPath={path} itemPath="/products" itemText="All products" />
          <NavbarItem currentPath={path} itemPath="/products/new" itemText="Create new product" />
          <NavbarItem currentPath={path} itemPath="/pages" itemText="All pages" />
          <NavbarItem currentPath={path} itemPath="/pages/new" itemText="Create new page" />
          <NavbarItem currentPath={path} itemPath="/config/categories/products" itemText="Product categories" />
          <NavbarItem currentPath={path} itemPath="/config/categories/pages" itemText="Page categories" />
        </ul>
      </div>
    </div>
  );
};

TopnavbarComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default TopnavbarComponent;
