import React, { PropTypes } from 'react';
import 'containers/ConfigNavigationContainer/_ConfigNavigationContainer.scss';

import configNavigationHoc from 'containers/ConfigNavigationContainer/configNavigationHoc';
import ConfigSidebarComponent from 'components/ConfigSidebar/ConfigSidebarComponent';
import ConfigNavigationComponent from 'components/ConfigNavigation/ConfigNavigationComponent';
import flow from 'lodash/flow';

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

export const propTypes = {
  config: PropTypes.object.isRequired,
};

ConfigNavigationContainer.propTypes = propTypes;
export const init = flow([configNavigationHoc]);
export default init(ConfigNavigationContainer);
