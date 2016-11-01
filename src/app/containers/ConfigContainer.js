import React, { PropTypes } from 'react';

import configContainerHoc from 'hoc/configContainerHoc';

const ConfigContainer = () =>
  <div className="ConfigContainerBlock">
    <div className="ConfigContainerBlock-title">
      Config
    </div>
    <div className="ConfigContainer">
    </div>
  </div>;

ConfigContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configContainerHoc(ConfigContainer);
