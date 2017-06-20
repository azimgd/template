import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Search/_SearchComponent.scss';

import { Field, reduxForm } from 'redux-form';
import { ButtonIconComponent } from 'components/Icons/IconsComponent';
import { InputText } from 'components/Shared/SharedFormInputComponent';

const SearchComponent = ({ handleSubmit, getSearchedProductsRequest }) =>
  <div styleName="SearchComponentBlock">
    <form styleName="SearchComponent" onSubmit={handleSubmit(getSearchedProductsRequest)}>
      <div styleName="SearchComponent-search">
        <Field name="search" component={InputText} label="Search by" />
      </div>
      <div styleName="SearchComponent-button">
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
})(css(SearchComponent, styles));
