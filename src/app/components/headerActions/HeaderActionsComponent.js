import React, { PropTypes } from 'react';
import { TitleIconComponent } from 'components/icons/IconsComponent';

const HeaderActions = ({ toggleCartDropdown }) =>
  <div className="HeaderActionsBlock">
    <div className="HeaderActions">
      <button>
        <TitleIconComponent name="IoIosCart" onClick={toggleCartDropdown} />
      </button>
    </div>
  </div>;

HeaderActions.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
};

export default HeaderActions;
