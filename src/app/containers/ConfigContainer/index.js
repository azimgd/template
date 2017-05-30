import React, { PropTypes } from 'react';
import 'containers/ConfigContainer/_ConfigContainer.scss';

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
      <div className="ConfigContainerBlock">
        <div className="ConfigContainerBlock-title">Config</div>
        <div className="ConfigContainer">
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
export default init(ConfigContainer);
