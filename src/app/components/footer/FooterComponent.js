import React from 'react';
import configMock from 'mocks/config';

const FooterComponent = () =>
  <div className="FooterComponentBlock">
    <div className="FooterComponent">
      <div className="FooterComponent-left">
        <div className="FooterComponent-left-title">
          {configMock.siteTitle}
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
