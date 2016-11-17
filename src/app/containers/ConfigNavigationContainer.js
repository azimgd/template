import React, { PropTypes } from 'react';

import configNavigationContainerHoc from 'hoc/configNavigationContainerHoc';
import ConfigNavigationComponent from 'components/configNavigation/ConfigNavigationComponent';
import { TitleIcon } from 'components/icons/IconsComponent';

class ConfigNavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createNewRoute = this.createNewRoute.bind(this);
  }

  createNewRoute() {}

  render() {
    return (
      <div className="ConfigNavigationContainerBlock">
        <div className="ConfigNavigationContainerBlock-title">
          <TitleIcon name="IoIosNavigateOutline" /> Config navigation
        </div>
        <div className="ConfigNavigationContainer">
          <div className="ConfigNavigationContainer-block">
            <div className="ConfigNavigationContainer-block-left">
              <ConfigNavigationComponent createNewRoute={this.createNewRoute} />
            </div>
            <div className="ConfigNavigationContainer-block-right">
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

export default configNavigationContainerHoc(ConfigNavigationContainer);
