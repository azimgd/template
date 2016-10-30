import React, { PropTypes } from 'react';

import pageViewContainerHoc from 'hoc/pageViewContainerHoc';
import PageDetailsComponent from 'components/pageDetails/PageDetailsComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';

const PageViewContainer = ({ page }) =>
  <div className="PageViewContainerBlock">
    <div className="PageViewContainerBlock-title">
      <PageNavLocationComponent pageName={page.pageTitle} />
    </div>
    <div className="PageViewContainer">
      <PageDetailsComponent page={page} />
    </div>
  </div>;

PageViewContainer.propTypes = {
  page: PropTypes.object.isRequired,
};

export default pageViewContainerHoc(PageViewContainer);
