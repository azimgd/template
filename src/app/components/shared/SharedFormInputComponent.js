import React, { PropTypes } from 'react';
import _ from 'lodash';

/**
 *
 */
export const InputText = ({ input, label, meta: { asyncValidating, touched, error } }) => (
  <div className="SharedFormInputComponent SharedFormInputComponent--InputText">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <input {...input} type="text" placeholder={label} />
      {touched && error && <div className="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

InputText.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

/**
 *
 */
export const InputTextarea = ({ input, label, meta: { asyncValidating, touched, error } }) => (
  <div className="SharedFormInputComponent SharedFormInputComponent--InputTextarea">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <textarea {...input} placeholder={label} />
      {touched && error && <div className="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

InputTextarea.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

/**
 *
 */
export const InputSelect = ({ input, label, options, meta: { asyncValidating, touched, error } }) => (
  <div className="SharedFormInputComponent SharedFormInputComponent--InputSelect">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <select {...input}>
        <option value="">{label}</option>
        {_.map(options, (item, key) => <option value={key} key={key}>{item}</option>)}
      </select>
      {touched && error && <div className="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

InputSelect.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
};
