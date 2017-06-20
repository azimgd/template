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
      <div styleName="ConfigContainerBlock">
        <div styleName="ConfigContainerBlock-title">Config</div>
        <div styleName="ConfigContainer">
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
