import React, { PropTypes } from 'react';
import 'scss/containers/_ConfigNavigationContainer.scss';

import configNavigationHoc from 'containers/ConfigNavigationContainer/configNavigationHoc';
import ConfigSidebarComponent from 'components/configSidebar/ConfigSidebarComponent';
import ConfigNavigationComponent from 'components/configNavigation/ConfigNavigationComponent';

class ConfigNavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createNewRoute = this.createNewRoute.bind(this);
  }

  createNewRoute() {}

  render() {
    return (
      <div className="ConfigNavigationContainerBlock">
        <div className="ConfigNavigationContainerBlock-title">Config navigation</div>
        <div className="ConfigNavigationContainer">
          <div className="ConfigNavigationContainer-block">
            <div className="ConfigNavigationContainer-block-left">
              <ConfigNavigationComponent createNewRoute={this.createNewRoute} />
            </div>
            <div className="ConfigNavigationContainer-block-right">
              <ConfigSidebarComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ConfigNavigationContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configNavigationHoc(ConfigNavigationContainer);
