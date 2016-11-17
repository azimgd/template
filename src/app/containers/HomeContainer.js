import React, { PropTypes } from 'react';

import homeContainerHoc from 'hoc/homeContainerHoc';
import * as routes from 'constants/routes';
import HomeCategoriesComponent from 'components/homeCategories/HomeCategoriesComponent';
import { TitleIcon } from 'components/icons/IconsComponent';

export class HomeContainer extends React.Component {
  componentWillMount() {
    this.props.getPageCategoriesRequest();
    this.props.getPageSubCategoriesRequest();
    this.props.getProductCategoriesRequest();
    this.props.getProductSubCategoriesRequest();
  }

  render() {
    const { mappedProductCategories, mappedPageCategories } = this.props;
    return (
      <div className="HomeContainerBlock">
        <div className="HomeContainerBlock-title">
          <TitleIcon name="IoIosHome" /> Home
        </div>
        <div className="HomeContainer">
          {mappedProductCategories && mappedProductCategories.length ?
            <div className="HomeContainer-productCategories">
              <div className="HomeContainer-productCategories-title">
                Product categories
              </div>
              <div className="HomeContainer-productCategories-content">
                <HomeCategoriesComponent
                  categories={mappedProductCategories}
                  categoryUrl={routes.PRODUCTS}
                  subCategoryUrl={routes.PRODUCTS}
                />
              </div>
            </div>
          : null}

          {mappedPageCategories && mappedPageCategories.length ?
            <div className="HomeContainer-pageCategories">
              <div className="HomeContainer-pageCategories-title">
                Page categories
              </div>
              <div className="HomeContainer-pageCategories-content">
                <HomeCategoriesComponent
                  categories={mappedPageCategories}
                  categoryUrl={routes.PAGES}
                  subCategoryUrl={routes.PAGES}
                />
              </div>
            </div>
          : null}
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  mappedProductCategories: PropTypes.array.isRequired,
  mappedPageCategories: PropTypes.array.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
};

export default homeContainerHoc(HomeContainer);
