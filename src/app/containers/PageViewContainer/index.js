import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/PageViewContainer/_PageViewContainer.scss';

import pageViewHoc from 'containers/PageViewContainer/pageViewHoc';
import PageDetailsComponent from 'components/PageDetails/PageDetailsComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import flow from 'lodash/flow';

export class PageViewContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div styleName="PageViewContainerBlock">
        <div styleName="PageViewContainerBlock-title">{this.props.page.data.title}</div>
        <div styleName="PageViewContainer">
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
  componentWillMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
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
export default init(css(PageViewContainer, styles));
