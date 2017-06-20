import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Header/_HeaderComponent.scss';

import { Link } from 'react-router';

const HeaderComponent = ({ children }) =>
  <div styleName="HeaderComponentBlock">
    <div styleName="HeaderComponent">
      <div styleName="HeaderComponent-left">
        <div styleName="Logo"><Link to="/">{APP_TITLE}</Link></div>
      </div>
      <div styleName="HeaderComponent-right">
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
