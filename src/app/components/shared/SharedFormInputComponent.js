import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Shared/_SharedFormInputComponent.scss';

import map from 'lodash/map';

/**
 *
 */
const InputTextComponent = ({ input, label, meta: { asyncValidating, touched, error } }) => (
  <div styleName="SharedFormInputComponent SharedFormInputComponent--InputText">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <input {...input} type="text" placeholder={label} />
      {touched && error && <div styleName="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

export const InputText = css(InputTextComponent, styles);
InputTextComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

/**
 *
 */
const InputPasswordComponent = ({ input, label, meta: { asyncValidating, touched, error } }) => (
  <div styleName="SharedFormInputComponent SharedFormInputComponent--InputPassword">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <input {...input} type="password" placeholder={label} />
      {touched && error && <div styleName="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

InputPasswordComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export const InputPassword = css(InputPasswordComponent, styles);

/**
 *
 */
const InputTextareaComponent = ({ input, label, meta: { asyncValidating, touched, error } }) => (
  <div styleName="SharedFormInputComponent SharedFormInputComponent--InputTextarea">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <textarea {...input} placeholder={label} />
      {touched && error && <div styleName="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

InputTextareaComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export const InputTextarea = css(InputTextareaComponent, styles);

/**
 *
 */
const InputSelectComponent = ({ input, label, options, meta: { asyncValidating, touched, error } }) => (
  <div styleName="SharedFormInputComponent SharedFormInputComponent--InputSelect">
    <label>{label}</label>
    <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
      <select {...input}>
        <option value="">{label}</option>
        {map(options, (item, key) => <option value={key} key={key}>{item}</option>)}
      </select>
      {touched && error && <div styleName="SharedFormInputComponent-error">{error}</div>}
    </div>
  </div>
);

InputSelectComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
};

export const InputSelect = css(InputSelectComponent, styles);

/**
 *
 */
export class RichTextareaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: this.props.input.value,
    };
  }

  onChange(value) {
    this.setState({ value });
    if (this.props.input.onChange) {
      this.props.input.onChange(value.toString('markdown'));
    }
  }

  render() {
    const { input, label, meta: { asyncValidating, touched, error } } = this.props;
    return (
      <div styleName="SharedFormInputComponent SharedFormInputComponent--InputTextarea">
        <label>{label}</label>
        <div className={asyncValidating ? 'SharedFormInputComponent-isValidating' : ''}>
          <textarea name={input.name} value={this.state.value} onChange={this.onChange} placeholder={label} rows="" />
          {touched && error && <div styleName="SharedFormInputComponent-error">{error}</div>}
        </div>
      </div>
    );
  }
}

RichTextareaComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
  onChange: PropTypes.func,
};

export const RichTextarea = css(RichTextareaComponent, styles);
