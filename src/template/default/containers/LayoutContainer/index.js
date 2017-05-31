import React from 'react';
import 'containers/LayoutContainer/_LayoutContainer.scss';
import 'template/containers/LayoutContainer/_LayoutContainer.scss';

import { init, propTypes } from 'containers/LayoutContainer/index';
import HeaderComponent from 'components/Header/HeaderComponent';
import FooterComponent from 'components/Footer/FooterComponent';
import TopnavbarComponent from 'components/Topnavbar/TopnavbarComponent';
import CartDropdownComponent from 'components/CartDropdown/CartDropdownComponent';
import CartDropdownItemComponent from 'components/CartDropdownItem/CartDropdownItemComponent';
import HeaderActionsComponent from 'components/HeaderActions/HeaderActionsComponent';
import SearchComponent from 'components/Search/SearchComponent';

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

LayoutContainer.propTypes = propTypes;
export default init(LayoutContainer);
