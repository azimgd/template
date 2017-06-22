import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/ConfigNavigationContainer/_ConfigNavigationContainer.scss';

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
      <div styleName="block">
        <div styleName="title">Config navigation</div>
        <div styleName="component">
          <div styleName="component-block">
            <div styleName="component-block-left">
              <ConfigNavigationComponent createNewRoute={this.createNewRoute} />
            </div>
            <div styleName="component-block-right">
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
