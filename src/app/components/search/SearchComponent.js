import React, { PropTypes } from 'react';
import 'scss/components/_SearchComponent.scss';

import { Field, reduxForm } from 'redux-form';
import { ButtonIconComponent } from 'components/icons/IconsComponent';
import { InputText } from 'components/shared/SharedFormInputComponent';

const SearchComponent = ({ handleSubmit, getSearchedProductsRequest }) =>
  <div className="SearchComponentBlock">
    <form className="SearchComponent" onSubmit={handleSubmit(getSearchedProductsRequest)}>
      <div className="SearchComponent-search">
        <Field name="search" component={InputText} label="Search by" />
      </div>
      <div className="SearchComponent-button">
        <button type="submit"><ButtonIconComponent name="IoIosSearchStrong" /></button>
      </div>
    </form>
  </div>;

SearchComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  getSearchedProductsRequest: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'SearchComponent',
})(SearchComponent);
