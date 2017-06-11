import React, { PropTypes } from 'react';
import 'components/Shared/_SharedFormInputComponent.scss';

import RichTextEditor from 'react-rte';
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
export const InputPassword = ({ input, label, meta: { asyncValidating, touched, error } }) => (
  <div className="SharedFormInputComponent SharedFormInputComponent--InputPassword">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <input {...input} type="password" placeholder={label} />
      {touched && error && <div className="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

InputPassword.propTypes = {
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

export class RichTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: RichTextEditor.createValueFromString(this.props.input.value, 'markdown'),
    };
  }

  onChange(value) {
    this.setState({ value });
    if (this.props.input.onChange) {
      this.props.input.onChange(value.toString('markdown'));
    }
  }

  render() {
    const { input, label, options, meta: { asyncValidating, touched, error } } = this.props;
    return (
      <div className="SharedFormInputComponent SharedFormInputComponent--InputTextarea">
        <label>{label}</label>
        <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
          <RichTextEditor name={input.name} value={this.state.value} onChange={this.onChange} placeholder={label} rows="" />
          {touched && error && <div className="SharedFormInputComponent-error">{error}</div>}
        </div>
      </div>
    );
  }
}

RichTextarea.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
  onChange: PropTypes.func,
};
