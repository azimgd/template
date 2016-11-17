import React from 'react';

import { TitleIcon } from 'components/icons/IconsComponent';

const NotFoundContainer = () =>
  <div className="NotFoundContainerBlock">
    <div className="NotFoundContainerBlock-title">
      <TitleIcon name="IoIosLightBulbOutline" /> Not found
    </div>
    <div className="NotFoundContainer">
      Following page does not exist
    </div>
  </div>;

export default NotFoundContainer;
