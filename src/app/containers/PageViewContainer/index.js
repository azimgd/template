import React, { PropTypes } from 'react';

import pageViewHoc from 'containers/PageViewContainer/pageViewHoc';
import PageDetailsComponent from 'components/pageDetails/PageDetailsComponent';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';

export class PageViewContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.params;
    this.props.getPageRequest({ id });
  }

  componentWillUnmount() {
    this.props.getPageIdle();
  }

  render() {
    const { isLoading, isEmpty, page, pageParsedToHtml } = this.props;
    return (
      <div className="PageViewContainerBlock">
        <div className="PageViewContainerBlock-title">
          <PageNavLocationComponent pageName={page.data.title} />
        </div>
        <div className="PageViewContainer">
          <IsLoadingComponent isLoading={isLoading}>
            <IsEmptyComponent isEmpty={isEmpty}>
              <PageDetailsComponent page={page.data} pageParsedToHtml={pageParsedToHtml} />
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

PageViewContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  getPageRequest: PropTypes.func.isRequired,
  getPageIdle: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
  pageParsedToHtml: PropTypes.object.isRequired,
};

export default pageViewHoc(PageViewContainer);
