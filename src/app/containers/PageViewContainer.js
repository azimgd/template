import React, { PropTypes } from 'react';

import pageViewContainerHoc from 'hoc/pageViewContainerHoc';
import PageDetailsComponent from 'components/pageDetails/PageDetailsComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';

class PageViewContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.params;
    this.props.getPageRequest({ id });
  }

  render() {
    const { page, pageParsedToHtml } = this.props;
    return (
      <div className="PageViewContainerBlock">
        <div className="PageViewContainerBlock-title">
          <PageNavLocationComponent pageName={page.data.title} />
        </div>
        <div className="PageViewContainer">
          <PageDetailsComponent page={page.data} pageParsedToHtml={pageParsedToHtml} />
        </div>
      </div>
    );
  }
}

PageViewContainer.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  getPageRequest: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
  pageParsedToHtml: PropTypes.object.isRequired,
};

export default pageViewContainerHoc(PageViewContainer);
