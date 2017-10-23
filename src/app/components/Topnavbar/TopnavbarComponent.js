import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/topnavbar/_TopnavbarComponent.scss';

import { Link } from 'react-router-dom';

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
    <div styleName="TopnavbarComponentBlock">
      <div styleName="TopnavbarComponent">
        <ul styleName="TopnavbarComponent-nav">
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

export default css(TopnavbarComponent, styles);
