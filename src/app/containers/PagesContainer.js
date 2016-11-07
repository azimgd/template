import React, { PropTypes } from 'react';
import _ from 'lodash';

import pagesContainerHoc from 'hoc/pagesContainerHoc';
import PageComponent from 'components/page/PageComponent';

class PagesContainer extends React.Component {
  componentWillMount() {
    this.props.getPagesRequest();
    this.props.getPageCategoriesRequest();
  }

  render() {
    const { maxHeight, pages } = this.props;
    return (
      <div className="PagesContainerBlock">
        <div className="PagesContainerBlock-title">
          Pages
        </div>

        <div className="PagesContainer">
          <div className="PagesContainer-pages">
            {_.map(pages.data, (page, key) =>
              <div key={key}><PageComponent page={page} height={maxHeight} /></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

PagesContainer.propTypes = {
  pages: PropTypes.array.isRequired,
  getPagesRequest: PropTypes.func.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  maxHeight: PropTypes.number,
};

export default pagesContainerHoc(PagesContainer);
