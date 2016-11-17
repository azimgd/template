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

  render() {
    const { maxHeight, pages } = this.props;
    return (
      <div className="PagesContainerBlock">
        <div className="PagesContainerBlock-title">
          <TitleIconComponent name="IoIosCopy" /> Pages
        </div>

        <div className="PagesContainer">
          <div className="PagesContainer-pages">
            <IsLoadingComponent>
              <IsEmptyComponent>
                {pages && pages.data.map((page, key) =>
                  <div key={key}><PageComponent page={page} height={maxHeight} /></div>
                )}
              </IsEmptyComponent>
            </IsLoadingComponent>
          </div>
        </div>
      </div>
    );
  }
}

PagesContainer.propTypes = {
  location: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  getPagesRequest: PropTypes.func.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  maxHeight: PropTypes.number,
};

export default pagesContainerHoc(PagesContainer);
