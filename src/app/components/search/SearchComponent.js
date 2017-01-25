import React from 'react';
import { ButtonIconComponent } from 'components/icons/IconsComponent';

const SearchComponent = () =>
  <div className="SearchComponentBlock">
    <div className="SearchComponent">
      <div className="SearchComponent-search">
        <input type="text" placeholder="Search for" />
      </div>
      <div className="SearchComponent-button">
        <button><ButtonIconComponent name="IoIosSearchStrong" /></button>
      </div>
    </div>
  </div>;

SearchComponent.propTypes = {
};

export default SearchComponent;
