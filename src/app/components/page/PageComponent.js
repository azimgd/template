import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const PageComponent = ({ page }) =>
  <div className="PageComponentBlock">
    <div className="PageComponent">
      <div className="PageComponent-content">
        <div className="PageComponent-content-title">
          <Link to={`/pages/${page.id}`}>{page.title}</Link>
        </div>
        <div className="PageComponent-content-description">
          {_.truncate(page.content, { length: 420 })}
        </div>
      </div>
      <div className="PageComponent-details">
        <div className="PageComponent-details-left">
          Created on 12 oct
        </div>
        <div className="PageComponent-details-right">
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

export default PageComponent;
