import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/HomeContainer/_HomeContainer.scss';

import homeHoc from 'containers/HomeContainer/homeHoc';
import HomeCategoriesComponent from 'components/HomeCategories/HomeCategoriesComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import isEmpty from 'lodash/isEmpty';
import flow from 'lodash/flow';

export class HomeContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div styleName="HomeContainerBlock">
        <div styleName="HomeContainerBlock-title">Home</div>
        <div styleName="HomeContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              {!isEmpty(this.props.productCategories.data) ?
                <div styleName="HomeContainer-productCategories">
                  <div styleName="HomeContainer-productCategories-title">
                    Product categories
                  </div>
                  <div styleName="HomeContainer-productCategories-content">
                    <HomeCategoriesComponent
                      categories={this.props.productCategories.data}
                      categoryUrl="/products"
                      subCategoryUrl="/products"
                    />
                  </div>
                </div>
              : null}

              {!isEmpty(this.props.pageCategories.data) ?
                <div styleName="HomeContainer-pageCategories">
                  <div styleName="HomeContainer-pageCategories-title">
                    Page categories
                  </div>
                  <div styleName="HomeContainer-pageCategories-content">
                    <HomeCategoriesComponent
                      categories={this.props.pageCategories.data}
                      categoryUrl="/pages"
                      subCategoryUrl="/pages"
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

export const propTypes = {
  componentWillMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getPageCategoriesIdle: PropTypes.func.isRequired,
  getProductCategoriesIdle: PropTypes.func.isRequired,
  productCategories: PropTypes.shape({
    data: PropTypes.array
  }).isRequired,
  pageCategories: PropTypes.shape({
    data: PropTypes.array
  }).isRequired,
};

HomeContainer.propTypes = propTypes;
export const init = flow([homeHoc]);
export default init(css(HomeContainer, styles));
