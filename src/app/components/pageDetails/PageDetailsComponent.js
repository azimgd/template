import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/PageDetails/_PageDetailsComponent.scss';

const PageDetailsComponent = ({ page, pageParsedToHtml }) =>
  <div styleName="PageDetailsComponentBlock">
    <div styleName="PageDetailsComponent">
      <div styleName="PageDetailsComponent-content">
        <p dangerouslySetInnerHTML={{ __html: pageParsedToHtml }} />
      </div>
    </div>
  </div>;

PageDetailsComponent.propTypes = {
  page: PropTypes.object.isRequired,
  pageParsedToHtml: PropTypes.string.isRequired,
};

export default css(PageDetailsComponent, styles);
