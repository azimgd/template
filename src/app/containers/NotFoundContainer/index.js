import React from 'react';
import 'containers/NotFoundContainer/_NotFoundContainer.scss';

import flow from 'lodash/flow';

const NotFoundContainer = () =>
  <div className="NotFoundContainerBlock">
    <div className="NotFoundContainerBlock-title">Not found</div>
    <div className="NotFoundContainer">
      Following page does not exist
    </div>
  </div>;

export const propTypes = {
};

NotFoundContainer.propTypes = propTypes;
export const init = flow();
export default init(NotFoundContainer);
