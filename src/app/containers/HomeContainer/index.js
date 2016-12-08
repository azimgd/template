import React, { PropTypes } from 'react';

import homeHoc from 'containers/HomeContainer/homeHoc';
import * as routes from 'constants/routes';
import HomeCategoriesComponent from 'components/homeCategories/HomeCategoriesComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';

export class HomeContainer extends React.Component {
  componentWillMount() {
    this.props.getPageCategoriesRequest();
    this.props.getPageSubCategoriesRequest();
    this.props.getProductCategoriesRequest();
    this.props.getProductSubCategoriesRequest();
  }

  componentWillUnmount() {
    this.props.getPageCategoriesIdle();
    this.props.getPageSubCategoriesIdle();
    this.props.getProductCategoriesIdle();
    this.props.getProductSubCategoriesIdle();
  }

  render() {
    const { isLoading, isEmpty, mappedProductCategories, mappedPageCategories } = this.props;
    return (
      <div className="HomeContainerBlock">
        <div className="HomeContainerBlock-title">
          <TitleIconComponent name="IoIosHome" /> Home
        </div>
        <div className="HomeContainer">
          <IsLoadingComponent isLoading={isLoading}>
            <IsEmptyComponent isEmpty={isEmpty}>
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
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  mappedProductCategories: PropTypes.array.isRequired,
  mappedPageCategories: PropTypes.array.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
  getPageCategoriesIdle: PropTypes.func.isRequired,
  getPageSubCategoriesIdle: PropTypes.func.isRequired,
  getProductCategoriesIdle: PropTypes.func.isRequired,
  getProductSubCategoriesIdle: PropTypes.func.isRequired,
};

export default homeHoc(HomeContainer);
