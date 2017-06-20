import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Sidebar/_SidebarComponent.scss';
import map from 'lodash/map';

const SidebarComponent = ({ items }) =>
  <div styleName="SidebarComponentBlock">
    <div styleName="SidebarComponent">
      {map(items, (item, key) =>
        <div styleName="SidebarComponent-item" key={key}>
          <div styleName="SidebarComponent-item-title">
            {item.title}
          </div>
          <div styleName="SidebarComponent-item-content">
            {item.content}
          </div>
        </div>
      )}
    </div>
  </div>;

SidebarComponent.propTypes = {
  items: PropTypes.array.isRequired,
};

export default css(SidebarComponent, styles);
