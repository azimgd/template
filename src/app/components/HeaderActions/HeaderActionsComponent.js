import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/HeaderActions/_HeaderActionsComponent.scss';

import { TitleIconComponent } from 'components/Icons/IconsComponent';

const HeaderActions = ({ toggleCartDropdown }) =>
  <div styleName="HeaderActionsBlock">
    <div styleName="HeaderActions">
      <button onClick={toggleCartDropdown}>
        <TitleIconComponent name="IoIosCart" />
      </button>
    </div>
  </div>;

HeaderActions.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
};

export default css(HeaderActions, styles);
