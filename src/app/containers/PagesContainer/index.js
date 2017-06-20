import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/PagesContainer/_PagesContainer.scss';

import pagesHoc from 'containers/PagesContainer/pagesHoc';
import PageComponent from 'components/Page/PageComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import flow from 'lodash/flow';

export class PagesContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div styleName="PagesContainerBlock">
        <div styleName="PagesContainerBlock-title">Pages</div>

        <div styleName="PagesContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div styleName="PagesContainer-pages">
                {this.props.pages.data && this.props.pages.data.map((page, key) =>
                  <div key={key}><PageComponent page={page} height={this.props.maxHeight} /></div>
                )}
              </div>
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
  location: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  getPagesRequest: PropTypes.func.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPagesIdle: PropTypes.func.isRequired,
  getPageCategoriesIdle: PropTypes.func.isRequired,
  maxHeight: PropTypes.number,
};

PagesContainer.propTypes = propTypes;
export const init = flow([pagesHoc]);
export default init(css(PagesContainer, styles));
