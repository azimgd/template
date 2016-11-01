import React, { PropTypes } from 'react';

import configNavigationContainerHoc from 'hoc/configNavigationContainerHoc';

const ConfigNavigationContainer = () =>
  <div className="ConfigNavigationContainerBlock">
    <div className="ConfigNavigationContainerBlock-title">
      Config navigation
    </div>
    <div className="ConfigNavigationContainer">
    </div>
  </div>;

ConfigNavigationContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configNavigationContainerHoc(ConfigNavigationContainer);
