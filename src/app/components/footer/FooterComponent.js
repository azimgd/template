import React from 'react';
import 'components/Footer/_FooterComponent.scss';

const FooterComponent = () =>
  <div className="FooterComponentBlock">
    <div className="FooterComponent">
      <div className="FooterComponent-left">
        <div className="FooterComponent-left-title">
          {APP_TITLE}
        </div>
      </div>
      <div className="FooterComponent-right">
        © Poland 2017
      </div>
    </div>
  </div>;

FooterComponent.propTypes = {
};

export default FooterComponent;
