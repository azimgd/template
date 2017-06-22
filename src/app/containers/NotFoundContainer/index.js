import React from 'react';
import css from 'services/cssService';
import styles from 'containers/NotFoundContainer/_NotFoundContainer.scss';

import flow from 'lodash/flow';

const NotFoundContainer = () =>
  <div styleName="block">
    <div styleName="title">Not found</div>
    <div styleName="component">
      Following page does not exist
    </div>
  </div>;

export const propTypes = {
};

NotFoundContainer.propTypes = propTypes;
export const init = flow();
export default init(css(NotFoundContainer, styles));
