import React, { PropTypes } from 'react';

import configHoc from 'containers/ConfigContainer/configHoc';

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

ConfigContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configHoc(ConfigContainer);
