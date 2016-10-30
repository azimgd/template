import React, { PropTypes } from 'react';

const PageDetailsComponent = ({ page }) =>
  <div className="PageDetailsComponentBlock">
    <div className="PageDetailsComponent">
      <div className="PageDetailsComponent-description">
        <p>{page.pageDescription}</p>
      </div>
    </div>
  </div>;

PageDetailsComponent.propTypes = {
  page: PropTypes.object.isRequired,
};

export default PageDetailsComponent;
