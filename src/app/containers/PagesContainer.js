import React, { PropTypes } from 'react';
import _ from 'lodash';

import pagesContainerHoc from 'hoc/pagesContainerHoc';
import PageComponent from 'components/page/PageComponent';

const PagesContainer = ({ maxHeight, pages }) =>
  <div className="PagesContainerBlock">
    <div className="PagesContainerBlock-title">
      Pages
    </div>

    <div className="PagesContainer">
      <div className="PagesContainer-pages">
        {_.map(pages, (page, key) =>
          <div key={key}><PageComponent page={page} height={maxHeight} /></div>
        )}
      </div>
    </div>
  </div>;

PagesContainer.propTypes = {
  pages: PropTypes.array.isRequired,
  maxHeight: PropTypes.number,
};

export default pagesContainerHoc(PagesContainer);
