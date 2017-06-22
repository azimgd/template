import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/ConfigContainer/_ConfigContainer.scss';

import configHoc from 'containers/ConfigContainer/configHoc';
import flow from 'lodash/flow';

class ConfigContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateConfig = this.updateConfig.bind(this);
  }

  updateConfig() {}

  render() {
    return (
      <div styleName="block">
        <div styleName="title">Config</div>
        <div styleName="component">
        </div>
      </div>
    );
  }
}

export const propTypes = {
  config: PropTypes.object.isRequired,
};

ConfigContainer.propTypes = propTypes;
export const init = flow([configHoc]);
export default init(css(ConfigContainer, styles));
