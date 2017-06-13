import React, { PropTypes } from 'react';
import 'containers/PagesContainer/_PagesContainer.scss';

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
      <div className="PagesContainerBlock">
        <div className="PagesContainerBlock-title">Pages</div>

        <div className="PagesContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div className="PagesContainer-pages">
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
export default init(PagesContainer);
