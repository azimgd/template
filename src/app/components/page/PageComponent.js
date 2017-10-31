import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Page/_PagesComponent.scss';

import { Link } from 'react-router-dom';
import truncate from 'lodash/truncate';

const PageComponent = ({ page }) =>
  <div styleName="PageComponentBlock">
    <div styleName="PageComponent">
      <div styleName="PageComponent-content">
        <div styleName="PageComponent-content-title">
          <Link to={`/pages/${page.id}`}>{page.title}</Link>
        </div>
        <div styleName="PageComponent-content-content">
          {truncate(page.content, { length: 420 })}
        </div>
      </div>
      <div styleName="PageComponent-details">
        <div styleName="PageComponent-details-left">
          Created on 12 oct
        </div>
        <div styleName="PageComponent-details-right">
          By username
        </div>
      </div>
    </div>
  </div>;

PageComponent.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default css(PageComponent, styles);
