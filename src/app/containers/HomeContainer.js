import React from 'react';

import HomeCategoriesComponent from 'components/homeCategories/HomeCategoriesComponent';

const HomeContainer = () =>
  <div className="HomeContainerBlock">
    <div className="HomeContainerBlock-title">
      Home
    </div>
    <div className="HomeContainer">
      <div className="HomeContainer-categories">
        <HomeCategoriesComponent />
      </div>
    </div>
  </div>;

export default HomeContainer;
