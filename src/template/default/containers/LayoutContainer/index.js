import React from 'react';
import css from 'services/cssService';
import styles from 'containers/LayoutContainer/_LayoutContainer.scss';

import { init, propTypes } from 'containers/LayoutContainer/index';
import HeaderComponent from 'components/Header/HeaderComponent';
import FooterComponent from 'components/Footer/FooterComponent';
import TopnavbarComponent from 'components/Topnavbar/TopnavbarComponent';
import CartDropdownComponent from 'components/CartDropdown/CartDropdownComponent';
import CartDropdownItemComponent from 'components/CartDropdownItem/CartDropdownItemComponent';
import HeaderActionsComponent from 'components/HeaderActions/HeaderActionsComponent';
import SearchComponent from 'components/Search/SearchComponent';

const LayoutContainer = ({ ui, toggleCartDropdown, getSearchedProductsRequest, children, cartPosition, location }) =>
  <div styleName="LayoutContainerBlock">
    <div styleName="LayoutContainer">
      <div styleName="LayoutContainer-header">
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
      <div styleName="LayoutContainer-topnavbar">
        <TopnavbarComponent pathname={location.pathname} />
      </div>
      <div styleName="LayoutContainer-block">
        {children}
      </div>
      <div styleName="LayoutContainer-footer">
        <FooterComponent />
      </div>
    </div>
  </div>;

LayoutContainer.propTypes = propTypes;
export default init(css(LayoutContainer, styles));
