import React, { PropTypes } from 'react';

import configContainerHoc from 'hoc/configContainerHoc';
import { TitleIcon } from 'components/icons/IconsComponent';

class ConfigContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateConfig = this.updateConfig.bind(this);
  }

  updateConfig() {}

  render() {
    return (
      <div className="ConfigContainerBlock">
        <div className="ConfigContainerBlock-title">
          <TitleIcon name="IoGearA" /> Config
        </div>
        <div className="ConfigContainer">
        </div>
      </div>
    );
  }
}

ConfigContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configContainerHoc(ConfigContainer);
