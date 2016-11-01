import React, { PropTypes } from 'react';

import configCategoriesContainerHoc from 'hoc/configCategoriesContainerHoc';

const ConfigCategoriesContainer = () =>
<div className="ConfigCategoriesContainerBlock">
    <div className="ConfigCategoriesContainerBlock-title">
      Config categories
    </div>
    <div className="ConfigCategoriesContainer">
    </div>
  </div>;

ConfigCategoriesContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configCategoriesContainerHoc(ConfigCategoriesContainer);
