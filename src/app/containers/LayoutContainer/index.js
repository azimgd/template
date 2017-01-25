import React, { PropTypes } from 'react';
import configMock from 'mocks/config';

import cartResizeListener from 'hoc/cartResizeListener';
import layoutHoc from 'containers/LayoutContainer/layoutHoc';

import HeaderComponent from 'components/header/HeaderComponent';
import SidebarComponent from 'components/sidebar/SidebarComponent';
import FooterComponent from 'components/footer/FooterComponent';
import TopnavbarComponent from 'components/topnavbar/TopnavbarComponent';
import AlertMessageComponent from 'components/alertMessage/AlertMessageComponent';
import CartDropdownComponent from 'components/cartDropdown/CartDropdownComponent';
import HeaderActionsComponent from 'components/headerActions/HeaderActionsComponent';
import SearchComponent from 'components/search/SearchComponent';

const LayoutContainer = ({ ui, toggleCartDropdown, toggleAlertMessage, children, cartPosition, location }) =>
  <div className="LayoutContainerBlock">
    <div className="LayoutContainer">
      <div className="LayoutContainer-header">
        <HeaderComponent>
          <HeaderActionsComponent toggleCartDropdown={toggleCartDropdown} />
          <SearchComponent />
        </HeaderComponent>
        <CartDropdownComponent cartPosition={cartPosition} isVisible={ui.cartDropdownIsVisible} />
      </div>
      <div className="LayoutContainer-topnavbar">
        <TopnavbarComponent pathname={location.pathname} />
      </div>
      <div className="LayoutContainer-search">
        <AlertMessageComponent toggleAlertMessage={toggleAlertMessage} isVisible={ui.alertMessageIsVisible} />
      </div>
      <div className="LayoutContainer-block">
        <div className="LayoutContainerContent">
          <div className="LayoutContainerContent-left">
            {children}
          </div>
          <div className="LayoutContainerContent-right">
            <SidebarComponent items={configMock.sidebarComponentItems} />
          </div>
        </div>
      </div>
      <div className="LayoutContainer-footer">
        <FooterComponent />
      </div>
    </div>
  </div>;

LayoutContainer.propTypes = {
  children: PropTypes.object.isRequired,
  cartPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  ui: PropTypes.object.isRequired,
  toggleCartDropdown: PropTypes.func.isRequired,
  toggleAlertMessage: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default layoutHoc(cartResizeListener(LayoutContainer));
