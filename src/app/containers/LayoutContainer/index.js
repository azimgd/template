import React, { PropTypes } from 'react';

import cartResizeListener from 'hoc/cartResizeListener';
import layoutHoc from 'containers/LayoutContainer/layoutHoc';
import productsProviderHoc from 'containers/ProductsContainer/productsProviderHoc';
import HeaderComponent from 'components/header/HeaderComponent';
import FooterComponent from 'components/footer/FooterComponent';
import TopnavbarComponent from 'components/topnavbar/TopnavbarComponent';
import CartDropdownComponent from 'components/cartDropdown/CartDropdownComponent';
import CartDropdownItemComponent from 'components/cartDropdownItem/CartDropdownItemComponent';
import HeaderActionsComponent from 'components/headerActions/HeaderActionsComponent';
import SearchComponent from 'components/search/SearchComponent';
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

LayoutContainer.propTypes = {
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

export default flow([layoutHoc, productsProviderHoc, cartResizeListener])(LayoutContainer);
