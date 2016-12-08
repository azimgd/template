import React from 'react';

import { TitleIconComponent } from 'components/icons/IconsComponent';

const NotFoundContainer = () =>
  <div className="NotFoundContainerBlock">
    <div className="NotFoundContainerBlock-title">
      <TitleIconComponent name="IoIosLightBulb" /> Not found
    </div>
    <div className="NotFoundContainer">
      Following page does not exist
    </div>
  </div>;

export default NotFoundContainer;
