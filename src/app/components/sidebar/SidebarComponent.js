import React, { PropTypes } from 'react';
import 'components/Sidebar/_SidebarComponent.scss';

import _ from 'lodash';

const SidebarComponent = ({ items }) =>
  <div className="SidebarComponentBlock">
    <div className="SidebarComponent">
      {_.map(items, (item, key) =>
        <div className="SidebarComponent-item" key={key}>
          <div className="SidebarComponent-item-title">
            {item.title}
          </div>
          <div className="SidebarComponent-item-content">
            {item.content}
          </div>
        </div>
      )}
    </div>
  </div>;

SidebarComponent.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SidebarComponent;
