import React, { PropTypes } from 'react';
import 'containers/LayoutContainer/_LayoutContainer.scss';

import cartResizeHoc from 'containers/LayoutContainer/cartResizeHoc';
import layoutHoc from 'containers/LayoutContainer/layoutHoc';
import productsProviderHoc from 'containers/ProductsContainer/productsProviderHoc';
import HeaderComponent from 'components/Header/HeaderComponent';
import FooterComponent from 'components/Footer/FooterComponent';
import TopnavbarComponent from 'components/Topnavbar/TopnavbarComponent';
import CartDropdownComponent from 'components/CartDropdown/CartDropdownComponent';
import CartDropdownItemComponent from 'components/CartDropdownItem/CartDropdownItemComponent';
import HeaderActionsComponent from 'components/HeaderActions/HeaderActionsComponent';
import SearchComponent from 'components/Search/SearchComponent';
import flow from 'lodash/flow';

const LayoutContainer = ({ ui, toggleCartDropdown, getSearchedProductsRequest, children, cartPosition, location }) =>
  <div className="LayoutContainerBlock">
    <div className="LayoutContainer">
      <div className="LayoutContainer-header">
        <HeaderComponent>
          <HeaderActionsComponent toggleCartDropdown={toggleCartDropdown} />
          <SearchComponent
            getSearchedProductsRequest={getSearchedProductsRequest}
          />
        </HeaderComponent>
        <CartDropdownComponent cartPosition={cartPosition} isVisible={ui.cartDropdownIsVisible}>
          <CartDropdownItemComponent />
        </CartDropdownComponent>
      </div>
      <div className="LayoutContainer-topnavbar">
        <TopnavbarComponent pathname={location.pathname} />
      </div>
      <div className="LayoutContainer-block">
        {children}
      </div>
      <div className="LayoutContainer-footer">
        <FooterComponent />
      </div>
    </div>
  </div>;

export const propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  cartPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  ui: PropTypes.shape({}).isRequired,
  toggleCartDropdown: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
  getSearchedProductsRequest: PropTypes.func.isRequired,
};

LayoutContainer.propTypes = propTypes;
export const init = flow([layoutHoc, productsProviderHoc, cartResizeHoc]);
export default init(LayoutContainer);
