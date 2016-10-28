import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import configMock from 'mocks/config';

const PageComponent = ({ page, height }) =>
  <div className="PageComponentBlock">
    <div className="PageComponent">
      <Link to={`/pages/${page.id}`}>
        <div className="PageComponent-image" style={{ backgroundImage: `url(${page.image || configMock.pageComponentThumb})` }}>
          <div className="PageComponent-image-price">{page.pagePrice}</div>
        </div>
      </Link>

      <div className="PageComponent-content" style={{ height: `${height}px` }}>
        <div className="PageComponent-content-title">
          <Link to={`/pages/${page.id}`}>{page.pageTitle}</Link>
        </div>
        <div className="PageComponent-content-description">
          {_.truncate(page.pageDescription, { length: 160 })}
        </div>
      </div>
      <div className="PageComponent-button">
        <Link to={`/pages/${page.id}`}>Add to cart</Link>
      </div>
    </div>
  </div>;

PageComponent.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  height: PropTypes.number,
};

export default PageComponent;
