import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Header/_HeaderComponent.scss';

import { Link } from 'react-router-dom';

const HeaderComponent = ({ children }) =>
  <div styleName="block">
    <div styleName="component">
      <div styleName="component-left">
        <div styleName="logo"><Link to="/">{APP_TITLE}</Link></div>
      </div>
      <div styleName="component-right">
        {children}
      </div>
    </div>
  </div>;

HeaderComponent.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default css(HeaderComponent, styles);
