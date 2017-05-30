import React, { PropTypes } from 'react';
import 'containers/PageViewContainer/_PageViewContainer.scss';

import pageViewHoc from 'containers/PageViewContainer/pageViewHoc';
import PageDetailsComponent from 'components/pageDetails/PageDetailsComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';
import flow from 'lodash/flow';

export class PageViewContainer extends React.Component {
  componentWillMount() {
    const { id } = this.props.params;
    this.props.getPageRequest({ id });
  }

  componentWillUnmount() {
    this.props.getPageIdle();
  }

  render() {
    return (
      <div className="PageViewContainerBlock">
        <div className="PageViewContainerBlock-title">{this.props.page.data.title}</div>
        <div className="PageViewContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <PageDetailsComponent
                page={this.props.page.data}
                pageParsedToHtml={this.props.pageParsedToHtml}
              />
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

export const propTypes = {
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

PageViewContainer.propTypes = propTypes;
export const init = flow([pageViewHoc]);
export default init(PageViewContainer);
