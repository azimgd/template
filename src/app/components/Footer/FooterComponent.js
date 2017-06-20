import React from 'react';
import css from 'services/cssService';
import styles from 'components/Footer/_FooterComponent.scss';

const FooterComponent = () =>
  <div styleName="FooterComponentBlock">
    <div styleName="FooterComponent">
      <div styleName="FooterComponent-left">
        <div styleName="FooterComponent-left-title">
          {APP_TITLE}
        </div>
      </div>
      <div styleName="FooterComponent-right">
        © Poland 2017
      </div>
    </div>
  </div>;

FooterComponent.propTypes = {
};

export default css(FooterComponent, styles);
