import React, { PropTypes } from 'react';

import cartResizeListener from 'hoc/cartResizeListener';
import layoutContainerHoc from 'hoc/layoutContainerHoc';

import HeaderComponent from 'components/header/HeaderComponent';
import SidebarComponent from 'components/sidebar/SidebarComponent';
import SidebarSearchComponent from 'components/sidebarSearch/SidebarSearchComponent';
import FooterComponent from 'components/footer/FooterComponent';
import TopnavbarComponent from 'components/topnavbar/TopnavbarComponent';
import AlertMessageComponent from 'components/alertMessage/AlertMessageComponent';
import CartDropdownComponent from 'components/cartDropdown/CartDropdownComponent';

const LayoutContainer = ({ ui, toggleCartDropdown, toggleAlertMessage, children, cartPosition }) =>
  <div className="LayoutContainerBlock">
    <div className="LayoutContainer">
      <div className="LayoutContainer-header">
        <HeaderComponent toggleCartDropdown={toggleCartDropdown} />
        <CartDropdownComponent cartPosition={cartPosition} isVisible={ui.cartDropdownIsVisible} />
      </div>
      <div className="LayoutContainer-topnavbar">
        <TopnavbarComponent />
      </div>
      <div className="LayoutContainer-search">
        <AlertMessageComponent toggleAlertMessage={toggleAlertMessage} isVisible={ui.alertMessageIsVisible} />
      </div>
      <div className="LayoutContainer-block">
        <div className="LayoutContainer-block-content">
          {children}
        </div>
        <div className="LayoutContainer-block-sidebar">
          <SidebarSearchComponent />
          <SidebarComponent />
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
};

export default layoutContainerHoc(cartResizeListener(LayoutContainer));
