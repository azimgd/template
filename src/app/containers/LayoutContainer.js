import React, { PropTypes } from 'react';

import cartResizeListener from 'hoc/CartResizeListener';

import HeaderComponent from 'components/header/HeaderComponent';
import SidebarComponent from 'components/sidebar/SidebarComponent';
import FooterComponent from 'components/footer/FooterComponent';
import TopnavbarComponent from 'components/topnavbar/TopnavbarComponent';
import CartDropdownComponent from 'components/cartDropdown/CartDropdownComponent';

const LayoutContainer = ({ children, cartPosition }) =>
  <div className="LayoutContainerBlock">
    <div className="LayoutContainer">
      <div className="LayoutContainer-header">
        <HeaderComponent />
        <CartDropdownComponent cartPosition={cartPosition} isVisible={false} />
      </div>
      <div className="LayoutContainer-topnavbar">
        <TopnavbarComponent />
      </div>
      <div className="LayoutContainer-block">
        <div className="LayoutContainer-block-content">
          {children}
        </div>
        <div className="LayoutContainer-block-sidebar">
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
};

export default cartResizeListener(LayoutContainer);
