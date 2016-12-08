import React, { PropTypes } from 'react';

import pagesContainerHoc from 'hoc/pagesContainerHoc';
import PageComponent from 'components/page/PageComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';

export class PagesContainer extends React.Component {
  componentWillMount() {
    const { categoryId, subCategoryId } = this.props.location.query;
    this.props.getPagesRequest({ categoryId, subCategoryId });
    this.props.getPageCategoriesRequest();
  }

  componentWillUnmount() {
    this.props.getPagesIdle();
    this.props.getPageCategoriesIdle();
  }

  render() {
    const { isLoading, isEmpty, maxHeight, pages } = this.props;
    return (
      <div className="PagesContainerBlock">
        <div className="PagesContainerBlock-title">
          <TitleIconComponent name="IoIosCopy" /> Pages
        </div>

        <div className="PagesContainer">
          <IsLoadingComponent isLoading={isLoading}>
            <IsEmptyComponent isEmpty={isEmpty}>
              <div className="PagesContainer-pages">
                {pages.data && pages.data.map((page, key) =>
                  <div key={key}><PageComponent page={page} height={maxHeight} /></div>
                )}
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

PagesContainer.propTypes = {
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

export default pagesContainerHoc(PagesContainer);
