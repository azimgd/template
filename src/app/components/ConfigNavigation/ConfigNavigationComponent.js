import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ConfigNavigation/_ConfigNavigationComponent.scss';

import { Field, reduxForm } from 'redux-form';
import ConfigNavigationComponentValidator from 'validators/ConfigNavigationComponentValidator';
import { InputText } from 'components/Shared/SharedFormInputComponent';

const ConfigNavigationComponent = ({ handleSubmit, createNewRoute }) =>
  <div styleName="ConfigNavigationComponentBlock">
    <form styleName="ConfigNavigationComponent" onSubmit={handleSubmit(createNewRoute)}>
      <div styleName="ConfigNavigationComponent-configForm">
        <div styleName="ConfigNavigationComponent-configForm-input">
          <Field name="newRoutePath" component={InputText} label="Path of new route" />
        </div>
        <div styleName="ConfigNavigationComponent-configForm-input">
          <Field name="newRouteName" component={InputText} label="Name of new route" />
        </div>
      </div>

      <button type="submit" styleName="ConfigNavigationComponent-button">
        Add route
      </button>
    </form>
  </div>;

ConfigNavigationComponent.propTypes = {
  createNewRoute: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ConfigNavigationComponent',
  asyncValidate: ConfigNavigationComponentValidator.asyncValidate,
})(css(ConfigNavigationComponent, styles));
