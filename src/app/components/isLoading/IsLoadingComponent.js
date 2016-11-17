import React, { PropTypes } from 'react';

const IsLoadingComponent = ({ isLoading, children }) => {
  if (isLoading) {
    return <div>Is loading</div>;
  }
  return <div>{children}</div>;
};

IsLoadingComponent.propTypes = {
  isLoading: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default IsLoadingComponent;
