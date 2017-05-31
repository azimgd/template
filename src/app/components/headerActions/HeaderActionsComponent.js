import React, { PropTypes } from 'react';
import 'components/HeaderActions/_HeaderActionsComponent.scss';

import { TitleIconComponent } from 'components/Icons/IconsComponent';

const HeaderActions = ({ toggleCartDropdown }) =>
  <div className="HeaderActionsBlock">
    <div className="HeaderActions">
      <button onClick={toggleCartDropdown}>
        <TitleIconComponent name="IoIosCart" />
      </button>
    </div>
  </div>;

HeaderActions.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
};

export default HeaderActions;
