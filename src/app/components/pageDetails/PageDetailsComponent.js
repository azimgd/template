import React, { PropTypes } from 'react';

const PageDetailsComponent = ({ page }) =>
  <div className="PageDetailsComponentBlock">
    <div className="PageDetailsComponent">
      <div className="PageDetailsComponent-content">
        <p>{page.content}</p>
      </div>
    </div>
  </div>;

PageDetailsComponent.propTypes = {
  page: PropTypes.object.isRequired,
};

export default PageDetailsComponent;
