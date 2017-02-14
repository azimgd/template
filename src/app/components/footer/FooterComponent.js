import React from 'react';

const FooterComponent = () =>
  <div className="FooterComponentBlock">
    <div className="FooterComponent">
      <div className="FooterComponent-left">
        <div className="FooterComponent-left-title">
          {APP_TITLE}
        </div>
      </div>
      <div className="FooterComponent-right">
        logout
      </div>
    </div>
  </div>;

FooterComponent.propTypes = {
};

export default FooterComponent;
